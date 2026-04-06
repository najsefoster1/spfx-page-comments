"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_2 = require("@fluentui/react");
var sp_http_1 = require("@microsoft/sp-http");
var CommentService_1 = require("../services/CommentService");
var PageComments = function (_a) {
    var context = _a.context;
    var service = (0, react_1.useMemo)(function () { return new CommentService_1.CommentService(context); }, [context]);
    var _b = (0, react_1.useState)([]), comments = _b[0], setComments = _b[1];
    var _c = (0, react_1.useState)(""), newComment = _c[0], setNewComment = _c[1];
    var _d = (0, react_1.useState)(""), message = _d[0], setMessage = _d[1];
    var _e = (0, react_1.useState)(react_2.MessageBarType.info), messageType = _e[0], setMessageType = _e[1];
    var _f = (0, react_1.useState)(false), loading = _f[0], setLoading = _f[1];
    var _g = (0, react_1.useState)(null), replyingToId = _g[0], setReplyingToId = _g[1];
    var _h = (0, react_1.useState)(""), replyText = _h[0], setReplyText = _h[1];
    var _j = (0, react_1.useState)(false), isAdmin = _j[0], setIsAdmin = _j[1];
    var pageUrl = window.location.pathname;
    var thcColors = {
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
    var cardStyle = {
        border: "1px solid ".concat(thcColors.border),
        borderRadius: "16px",
        padding: "18px",
        marginBottom: "16px",
        backgroundColor: thcColors.white,
        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)"
    };
    var replyCardStyle = {
        borderLeft: "4px solid ".concat(thcColors.accent),
        backgroundColor: thcColors.replyBg,
        borderRadius: "12px",
        padding: "12px 14px",
        marginBottom: "10px"
    };
    var actionRowStyle = {
        display: "flex",
        gap: "8px",
        marginTop: "10px",
        flexWrap: "wrap"
    };
    var initialsStyle = function (name) { return ({
        width: "36px",
        height: "36px",
        minWidth: "36px",
        borderRadius: "999px",
        backgroundColor: thcColors.accentLight,
        color: thcColors.primary,
        border: "1px solid ".concat(thcColors.border),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: "13px"
    }); };
    var getInitials = function (name) {
        if (!name)
            return "U";
        var parts = name.trim().split(" ").filter(Boolean);
        if (parts.length === 1)
            return parts[0][0].toUpperCase();
        return "".concat(parts[0][0]).concat(parts[1][0]).toUpperCase();
    };
    var formatDate = function (date) {
        if (!date)
            return "";
        return new Date(date).toLocaleString();
    };
    var checkIfAdmin = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var isSiteAdmin, response, data, isInOwnersGroup, error_1;
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    isSiteAdmin = !!((_a = context.pageContext.legacyPageContext) === null || _a === void 0 ? void 0 : _a.isSiteAdmin);
                    if (isSiteAdmin) {
                        setIsAdmin(true);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, context.spHttpClient.get("".concat(context.pageContext.web.absoluteUrl, "/_api/web/currentuser/groups"), sp_http_1.SPHttpClient.configurations.v1)];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _b.sent();
                    isInOwnersGroup = (data.value || []).some(function (group) {
                        return (group.Title || "").toLowerCase().includes("owners");
                    });
                    setIsAdmin(isInOwnersGroup);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error("Admin check failed:", error_1);
                    setIsAdmin(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var loadComments = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var data, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoading(true);
                    setMessage("");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, service.getCommentsByPage(pageUrl)];
                case 2:
                    data = _b.sent();
                    setComments(data);
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setMessage("Unable to load comments.");
                    setMessageType(react_2.MessageBarType.error);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        loadComments().catch(function () {
            setMessage("Unable to load comments.");
            setMessageType(react_2.MessageBarType.error);
        });
        checkIfAdmin().catch(function () {
            setIsAdmin(false);
        });
    }, []);
    var submitComment = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!newComment.trim()) {
                        setMessage("Please enter a comment.");
                        setMessageType(react_2.MessageBarType.warning);
                        return [2 /*return*/];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, service.addComment(newComment, pageUrl)];
                case 2:
                    _b.sent();
                    setNewComment("");
                    return [4 /*yield*/, loadComments()];
                case 3:
                    _b.sent();
                    setMessage("Comment posted successfully.");
                    setMessageType(react_2.MessageBarType.success);
                    setTimeout(function () { return setMessage(""); }, 3000);
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    setMessage("Unable to post comment.");
                    setMessageType(react_2.MessageBarType.error);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var submitReply = function (parentId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!replyText.trim()) {
                        setMessage("Please enter a reply.");
                        setMessageType(react_2.MessageBarType.warning);
                        return [2 /*return*/];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, service.addComment(replyText, pageUrl, parentId)];
                case 2:
                    _b.sent();
                    setReplyText("");
                    setReplyingToId(null);
                    return [4 /*yield*/, loadComments()];
                case 3:
                    _b.sent();
                    setMessage("Reply posted successfully.");
                    setMessageType(react_2.MessageBarType.success);
                    setTimeout(function () { return setMessage(""); }, 3000);
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    setMessage("Unable to post reply.");
                    setMessageType(react_2.MessageBarType.error);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var archiveComment = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!id)
                        return [2 /*return*/];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, service.archiveComment(id)];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, loadComments()];
                case 3:
                    _b.sent();
                    setMessage("Comment archived.");
                    setMessageType(react_2.MessageBarType.success);
                    setTimeout(function () { return setMessage(""); }, 3000);
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    setMessage("Archive failed.");
                    setMessageType(react_2.MessageBarType.error);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var topComments = comments.filter(function (c) { return !c.ParentCommentId; });
    var getReplies = function (id) {
        return comments.filter(function (c) { return c.ParentCommentId === id; });
    };
    return (React.createElement("div", { style: { maxWidth: 920, margin: "0 auto", padding: 20, color: thcColors.text } },
        React.createElement("div", { style: { marginBottom: "20px" } },
            React.createElement("h2", { style: { color: thcColors.primary, marginBottom: "6px", fontSize: "28px" } }, "Comments"),
            React.createElement("div", { style: { color: thcColors.subtext, fontSize: "14px" } }, "Share feedback, ask questions, and reply to specific comments.")),
        message && (React.createElement("div", { style: { marginBottom: "16px" } },
            React.createElement(react_2.MessageBar, { messageBarType: messageType, isMultiline: false }, message))),
        React.createElement("div", { style: {
                backgroundColor: thcColors.accentLight,
                border: "1px solid ".concat(thcColors.border),
                borderRadius: "18px",
                padding: "18px",
                marginBottom: "24px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)"
            } },
            React.createElement(react_2.TextField, { label: "Add a comment", multiline: true, rows: 4, value: newComment, onChange: function (_, v) { return setNewComment(v || ""); } }),
            React.createElement("div", { style: { marginTop: "14px" } },
                React.createElement(react_2.PrimaryButton, { text: "Post Comment", styles: {
                        root: {
                            backgroundColor: thcColors.primary,
                            borderColor: thcColors.primary
                        },
                        rootHovered: {
                            backgroundColor: thcColors.primaryHover,
                            borderColor: thcColors.primaryHover
                        }
                    }, onClick: submitComment }))),
        loading && React.createElement("div", null, "Loading comments..."),
        !loading && topComments.length === 0 && (React.createElement("div", { style: {
                border: "1px dashed ".concat(thcColors.border),
                borderRadius: "16px",
                padding: "20px",
                color: thcColors.subtext,
                backgroundColor: thcColors.white
            } }, "No comments yet for this page.")),
        !loading &&
            topComments.map(function (comment) { return (React.createElement("div", { key: comment.Id, style: cardStyle },
                React.createElement("div", { style: { display: "flex", gap: "12px", alignItems: "flex-start" } },
                    React.createElement("div", { style: initialsStyle(comment.AuthorTitle || "User") }, getInitials(comment.AuthorTitle)),
                    React.createElement("div", { style: { flex: 1 } },
                        React.createElement("div", { style: { fontWeight: 700, marginBottom: "4px", fontSize: "15px" } }, comment.AuthorTitle || "Unknown User"),
                        React.createElement("div", { style: { fontSize: "12px", color: thcColors.subtext, marginBottom: "10px" } }, formatDate(comment.Created)),
                        React.createElement("div", { style: { whiteSpace: "pre-wrap", lineHeight: 1.5, marginBottom: "12px" } }, comment.CommentText),
                        React.createElement("div", { style: actionRowStyle },
                            React.createElement(react_2.DefaultButton, { text: replyingToId === comment.Id ? "Cancel Reply" : "Reply", styles: {
                                    root: {
                                        borderColor: thcColors.border,
                                        color: thcColors.primary
                                    }
                                }, onClick: function () {
                                    return setReplyingToId(replyingToId === comment.Id ? null : comment.Id || null);
                                } }),
                            isAdmin && (React.createElement(react_2.DefaultButton, { text: "Archive", styles: {
                                    root: {
                                        borderColor: thcColors.border,
                                        color: thcColors.primary
                                    }
                                }, onClick: function () { return archiveComment(comment.Id); } }))),
                        replyingToId === comment.Id && (React.createElement("div", { style: {
                                marginTop: "14px",
                                padding: "14px",
                                backgroundColor: thcColors.replyBg,
                                border: "1px solid ".concat(thcColors.border),
                                borderRadius: "14px"
                            } },
                            React.createElement(react_2.TextField, { label: "Write a reply", multiline: true, rows: 3, value: replyText, onChange: function (_, v) { return setReplyText(v || ""); } }),
                            React.createElement("div", { style: { marginTop: "10px" } },
                                React.createElement(react_2.PrimaryButton, { text: "Post Reply", styles: {
                                        root: {
                                            backgroundColor: thcColors.primary,
                                            borderColor: thcColors.primary
                                        },
                                        rootHovered: {
                                            backgroundColor: thcColors.primaryHover,
                                            borderColor: thcColors.primaryHover
                                        }
                                    }, onClick: function () { return submitReply(comment.Id); } })))),
                        getReplies(comment.Id).length > 0 && (React.createElement("div", { style: { marginTop: "18px", marginLeft: "10px" } }, getReplies(comment.Id).map(function (reply) { return (React.createElement("div", { key: reply.Id, style: replyCardStyle },
                            React.createElement("div", { style: { display: "flex", gap: "10px", alignItems: "flex-start" } },
                                React.createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, initialsStyle(reply.AuthorTitle || "User")), { width: "30px", height: "30px", minWidth: "30px", fontSize: "12px" }) }, getInitials(reply.AuthorTitle)),
                                React.createElement("div", { style: { flex: 1 } },
                                    React.createElement("div", { style: { fontWeight: 600, marginBottom: "4px", fontSize: "14px" } }, reply.AuthorTitle || "Unknown User"),
                                    React.createElement("div", { style: { fontSize: "12px", color: thcColors.subtext, marginBottom: "8px" } }, formatDate(reply.Created)),
                                    React.createElement("div", { style: { whiteSpace: "pre-wrap", lineHeight: 1.5, marginBottom: "10px" } }, reply.CommentText),
                                    isAdmin && (React.createElement(react_2.DefaultButton, { text: "Archive", styles: {
                                            root: {
                                                borderColor: thcColors.border,
                                                color: thcColors.primary
                                            }
                                        }, onClick: function () { return archiveComment(reply.Id); } })))))); }))))))); })));
};
exports.default = PageComments;
//# sourceMappingURL=PageComments.js.map