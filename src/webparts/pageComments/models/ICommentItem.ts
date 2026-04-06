export interface ICommentItem {
  Id?: number;
  Title?: string;
  CommentText: string;
  PageUrl: string;
  ParentCommentId?: number;
  IsArchived?: boolean;
  ArchivedDate?: string;
  Created?: string;
  AuthorTitle?: string;
}