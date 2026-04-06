import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import {
  MessageBar,
  MessageBarType,
  PrimaryButton,
  TextField,
  DefaultButton
} from "@fluentui/react";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient } from "@microsoft/sp-http";
import { ICommentItem } from "../models/ICommentItem";
import { CommentService } from "../services/CommentService";

export interface IPageCommentsProps {
  context: WebPartContext;
}

const PageComments: React.FC<IPageCommentsProps> = ({ context }) => {
  const service = useMemo(() => new CommentService(context), [context]);

  const [comments, setComments] = useState<ICommentItem[]>([]);
  const [newComment, setNewComment] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<MessageBarType>(MessageBarType.info);
  const [loading, setLoading] = useState(false);

  const [replyingToId, setReplyingToId] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const pageUrl = window.location.pathname;

  const thcColors = {
    primary: "#7A1F2B",
    primaryHover: "#641822",
    accent: "#C8A96B",
    accentLight: "#F4EBDD",
    border: "#D8C7A3",
    text: "#2F2A24",
    subtext: "#6B6257",
    white: "#FFFFFF",
    replyBg: "#FBF7F0"
  };

  const cardStyle: React.CSSProperties = {
    border: `1px solid ${thcColors.border}`,
    borderRadius: "16px",
    padding: "18px",
    marginBottom: "16px",
    backgroundColor: thcColors.white,
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)"
  };

  const replyCardStyle: React.CSSProperties = {
    borderLeft: `4px solid ${thcColors.accent}`,
    backgroundColor: thcColors.replyBg,
    borderRadius: "12px",
    padding: "12px 14px",
    marginBottom: "10px"
  };

  const actionRowStyle: React.CSSProperties = {
    display: "flex",
    gap: "8px",
    marginTop: "10px",
    flexWrap: "wrap"
  };

  const initialsStyle = (name: string): React.CSSProperties => ({
    width: "36px",
    height: "36px",
    minWidth: "36px",
    borderRadius: "999px",
    backgroundColor: thcColors.accentLight,
    color: thcColors.primary,
    border: `1px solid ${thcColors.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "13px"
  });

  const getInitials = (name?: string): string => {
    if (!name) return "U";
    const parts = name.trim().split(" ").filter(Boolean);
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  };

  const formatDate = (date?: string): string => {
    if (!date) return "";
    return new Date(date).toLocaleString();
  };

  const checkIfAdmin = async (): Promise<void> => {
    try {
      const isSiteAdmin = !!context.pageContext.legacyPageContext?.isSiteAdmin;

      if (isSiteAdmin) {
        setIsAdmin(true);
        return;
      }

      const response = await context.spHttpClient.get(
        `${context.pageContext.web.absoluteUrl}/_api/web/currentuser/groups`,
        SPHttpClient.configurations.v1
      );

      const data = await response.json();

      const isInOwnersGroup = (data.value || []).some((group: { Title: string }) =>
        (group.Title || "").toLowerCase().includes("owners")
      );

      setIsAdmin(isInOwnersGroup);
    } catch (error) {
      console.error("Admin check failed:", error);
      setIsAdmin(false);
    }
  };

  const loadComments = async (): Promise<void> => {
    setLoading(true);
    setMessage("");

    try {
      const data = await service.getCommentsByPage(pageUrl);
      setComments(data);
    } catch {
      setMessage("Unable to load comments.");
      setMessageType(MessageBarType.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComments().catch(() => {
      setMessage("Unable to load comments.");
      setMessageType(MessageBarType.error);
    });

    checkIfAdmin().catch(() => {
      setIsAdmin(false);
    });
  }, []);

  const submitComment = async (): Promise<void> => {
    if (!newComment.trim()) {
      setMessage("Please enter a comment.");
      setMessageType(MessageBarType.warning);
      return;
    }

    try {
      await service.addComment(newComment, pageUrl);
      setNewComment("");
      await loadComments();
      setMessage("Comment posted successfully.");
      setMessageType(MessageBarType.success);

      setTimeout(() => setMessage(""), 3000);
    } catch {
      setMessage("Unable to post comment.");
      setMessageType(MessageBarType.error);
    }
  };

  const submitReply = async (parentId: number): Promise<void> => {
    if (!replyText.trim()) {
      setMessage("Please enter a reply.");
      setMessageType(MessageBarType.warning);
      return;
    }

    try {
      await service.addComment(replyText, pageUrl, parentId);
      setReplyText("");
      setReplyingToId(null);
      await loadComments();
      setMessage("Reply posted successfully.");
      setMessageType(MessageBarType.success);

      setTimeout(() => setMessage(""), 3000);
    } catch {
      setMessage("Unable to post reply.");
      setMessageType(MessageBarType.error);
    }
  };

  const archiveComment = async (id?: number): Promise<void> => {
    if (!id) return;

    try {
      await service.archiveComment(id);
      await loadComments();
      setMessage("Comment archived.");
      setMessageType(MessageBarType.success);

      setTimeout(() => setMessage(""), 3000);
    } catch {
      setMessage("Archive failed.");
      setMessageType(MessageBarType.error);
    }
  };

  const topComments = comments.filter((c) => !c.ParentCommentId);
  const getReplies = (id: number): ICommentItem[] =>
    comments.filter((c) => c.ParentCommentId === id);

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: 20, color: thcColors.text }}>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: thcColors.primary, marginBottom: "6px", fontSize: "28px" }}>
          Comments
        </h2>
        <div style={{ color: thcColors.subtext, fontSize: "14px" }}>
          Share feedback, ask questions, and reply to specific comments.
        </div>
      </div>

      {message && (
        <div style={{ marginBottom: "16px" }}>
          <MessageBar messageBarType={messageType} isMultiline={false}>
            {message}
          </MessageBar>
        </div>
      )}

      <div
        style={{
          backgroundColor: thcColors.accentLight,
          border: `1px solid ${thcColors.border}`,
          borderRadius: "18px",
          padding: "18px",
          marginBottom: "24px",
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)"
        }}
      >
        <TextField
          label="Add a comment"
          multiline
          rows={4}
          value={newComment}
          onChange={(_, v) => setNewComment(v || "")}
        />

        <div style={{ marginTop: "14px" }}>
          <PrimaryButton
            text="Post Comment"
            styles={{
              root: {
                backgroundColor: thcColors.primary,
                borderColor: thcColors.primary
              },
              rootHovered: {
                backgroundColor: thcColors.primaryHover,
                borderColor: thcColors.primaryHover
              }
            }}
            onClick={submitComment}
          />
        </div>
      </div>

      {loading && <div>Loading comments...</div>}

      {!loading && topComments.length === 0 && (
        <div
          style={{
            border: `1px dashed ${thcColors.border}`,
            borderRadius: "16px",
            padding: "20px",
            color: thcColors.subtext,
            backgroundColor: thcColors.white
          }}
        >
          No comments yet for this page.
        </div>
      )}

      {!loading &&
        topComments.map((comment) => (
          <div key={comment.Id} style={cardStyle}>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={initialsStyle(comment.AuthorTitle || "User")}>
                {getInitials(comment.AuthorTitle)}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, marginBottom: "4px", fontSize: "15px" }}>
                  {comment.AuthorTitle || "Unknown User"}
                </div>

                <div style={{ fontSize: "12px", color: thcColors.subtext, marginBottom: "10px" }}>
                  {formatDate(comment.Created)}
                </div>

                <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.5, marginBottom: "12px" }}>
                  {comment.CommentText}
                </div>

                <div style={actionRowStyle}>
                  <DefaultButton
                    text={replyingToId === comment.Id ? "Cancel Reply" : "Reply"}
                    styles={{
                      root: {
                        borderColor: thcColors.border,
                        color: thcColors.primary
                      }
                    }}
                    onClick={() =>
                      setReplyingToId(replyingToId === comment.Id ? null : comment.Id || null)
                    }
                  />

                  {isAdmin && (
                    <DefaultButton
                      text="Archive"
                      styles={{
                        root: {
                          borderColor: thcColors.border,
                          color: thcColors.primary
                        }
                      }}
                      onClick={() => archiveComment(comment.Id)}
                    />
                  )}
                </div>

                {replyingToId === comment.Id && (
                  <div
                    style={{
                      marginTop: "14px",
                      padding: "14px",
                      backgroundColor: thcColors.replyBg,
                      border: `1px solid ${thcColors.border}`,
                      borderRadius: "14px"
                    }}
                  >
                    <TextField
                      label="Write a reply"
                      multiline
                      rows={3}
                      value={replyText}
                      onChange={(_, v) => setReplyText(v || "")}
                    />

                    <div style={{ marginTop: "10px" }}>
                      <PrimaryButton
                        text="Post Reply"
                        styles={{
                          root: {
                            backgroundColor: thcColors.primary,
                            borderColor: thcColors.primary
                          },
                          rootHovered: {
                            backgroundColor: thcColors.primaryHover,
                            borderColor: thcColors.primaryHover
                          }
                        }}
                        onClick={() => submitReply(comment.Id!)}
                      />
                    </div>
                  </div>
                )}

                {getReplies(comment.Id!).length > 0 && (
                  <div style={{ marginTop: "18px", marginLeft: "10px" }}>
                    {getReplies(comment.Id!).map((reply) => (
                      <div key={reply.Id} style={replyCardStyle}>
                        <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                          <div
                            style={{
                              ...initialsStyle(reply.AuthorTitle || "User"),
                              width: "30px",
                              height: "30px",
                              minWidth: "30px",
                              fontSize: "12px"
                            }}
                          >
                            {getInitials(reply.AuthorTitle)}
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 600, marginBottom: "4px", fontSize: "14px" }}>
                              {reply.AuthorTitle || "Unknown User"}
                            </div>

                            <div style={{ fontSize: "12px", color: thcColors.subtext, marginBottom: "8px" }}>
                              {formatDate(reply.Created)}
                            </div>

                            <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.5, marginBottom: "10px" }}>
                              {reply.CommentText}
                            </div>

                            {isAdmin && (
                              <DefaultButton
                                text="Archive"
                                styles={{
                                  root: {
                                    borderColor: thcColors.border,
                                    color: thcColors.primary
                                  }
                                }}
                                onClick={() => archiveComment(reply.Id)}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PageComments;