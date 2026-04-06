import { SPFI, spfi } from "@pnp/sp";
import { SPFx } from "@pnp/sp/behaviors/spfx";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ICommentItem } from "../models/ICommentItem";

export class CommentService {
  private _sp: SPFI;
  private _listTitle = "Page Comments";
  private _replyField = "ParentCommentID";
  private _archiveField = "IsArchived";
  private _archivedDateField = "ArchivedDate";

  constructor(context: WebPartContext) {
    this._sp = spfi().using(SPFx(context));
  }

  public async getCommentsByPage(pageUrl: string): Promise<ICommentItem[]> {
    const escapedPageUrl = pageUrl.replace(/'/g, "''");

    try {
      const items = await this._sp.web.lists
        .getByTitle(this._listTitle)
        .items
        .select(
          "Id",
          "Title",
          "CommentText",
          "PageUrl",
          this._replyField,
          this._archiveField,
          this._archivedDateField,
          "Created",
          "Author/Title"
        )
        .expand("Author")
        .filter(`PageUrl eq '${escapedPageUrl}' and (${this._archiveField} eq null or ${this._archiveField} eq 0)`)
        .orderBy("Created", false)();

      return items.map((item: any) => ({
        Id: item.Id,
        Title: item.Title,
        CommentText: item.CommentText,
        PageUrl: item.PageUrl,
        ParentCommentId: item[this._replyField],
        IsArchived: item[this._archiveField],
        ArchivedDate: item[this._archivedDateField],
        Created: item.Created,
        AuthorTitle: item.Author?.Title
      }));
    } catch (error) {
      console.error("Error loading comments:", error);
      throw error;
    }
  }

  public async addComment(
    commentText: string,
    pageUrl: string,
    parentCommentId?: number
  ): Promise<void> {
    const trimmed = commentText.trim();
    const shortTitle =
      trimmed.length > 40 ? `${trimmed.substring(0, 40)}...` : trimmed;

    const payload: any = {
      Title: shortTitle || "Comment",
      CommentText: trimmed,
      PageUrl: pageUrl,
      IsArchived: false
    };

    if (typeof parentCommentId === "number") {
      payload[this._replyField] = parentCommentId;
    }

    try {
      await this._sp.web.lists.getByTitle(this._listTitle).items.add(payload);
    } catch (error) {
      console.error("Error adding comment:", error);
      throw error;
    }
  }

  public async archiveComment(commentId: number): Promise<void> {
    try {
      await this._sp.web.lists
        .getByTitle(this._listTitle)
        .items
        .getById(commentId)
        .update({
          [this._archiveField]: true,
          [this._archivedDateField]: new Date().toISOString()
        });
    } catch (error) {
      console.error("Error archiving comment:", error);
      throw error;
    }
  }
}