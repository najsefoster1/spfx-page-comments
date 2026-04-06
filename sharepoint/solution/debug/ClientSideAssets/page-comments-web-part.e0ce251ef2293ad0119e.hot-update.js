"use strict";
self["webpackHotUpdate_07c829ff_2a41_4d63_9775_a9e9f234618a_0_0_1"]("page-comments-web-part",{

/***/ 3291:
/*!**************************************************************!*\
  !*** ./lib/webparts/pageComments/components/PageComments.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ 643);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ 208);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ 7102);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ 9425);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react */ 5613);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ 909);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_CommentService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/CommentService */ 7094);






var PageComments = function (_a) {
    var context = _a.context;
    var service = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return new _services_CommentService__WEBPACK_IMPORTED_MODULE_2__.CommentService(context); }, [context]);
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), comments = _b[0], setComments = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), newComment = _c[0], setNewComment = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), message = _d[0], setMessage = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.MessageBarType.info), messageType = _e[0], setMessageType = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), loading = _f[0], setLoading = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), replyingToId = _g[0], setReplyingToId = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), replyText = _h[0], setReplyText = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isAdmin = _j[0], setIsAdmin = _j[1];
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
    var checkIfAdmin = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(void 0, void 0, void 0, function () {
        var isSiteAdmin, response, data, isInOwnersGroup, error_1;
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    isSiteAdmin = !!((_a = context.pageContext.legacyPageContext) === null || _a === void 0 ? void 0 : _a.isSiteAdmin);
                    if (isSiteAdmin) {
                        setIsAdmin(true);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, context.spHttpClient.get("".concat(context.pageContext.web.absoluteUrl, "/_api/web/currentuser/groups"), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__.SPHttpClient.configurations.v1)];
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
    var loadComments = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(void 0, void 0, void 0, function () {
        var data, _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
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
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.MessageBarType.error);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        loadComments().catch(function () {
            setMessage("Unable to load comments.");
            setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.MessageBarType.error);
        });
        checkIfAdmin().catch(function () {
            setIsAdmin(false);
        });
    }, []);
    var submitComment = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(void 0, void 0, void 0, function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!newComment.trim()) {
                        setMessage("Please enter a comment.");
                        setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.MessageBarType.warning);
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
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.MessageBarType.success);
                    setTimeout(function () { return setMessage(""); }, 3000);
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    setMessage("Unable to post comment.");
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.MessageBarType.error);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var submitReply = function (parentId) { return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(void 0, void 0, void 0, function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!replyText.trim()) {
                        setMessage("Please enter a reply.");
                        setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.MessageBarType.warning);
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
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.MessageBarType.success);
                    setTimeout(function () { return setMessage(""); }, 3000);
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    setMessage("Unable to post reply.");
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.MessageBarType.error);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var archiveComment = function (id) { return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(void 0, void 0, void 0, function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
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
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.MessageBarType.success);
                    setTimeout(function () { return setMessage(""); }, 3000);
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    setMessage("Archive failed.");
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.MessageBarType.error);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var topComments = comments.filter(function (c) { return !c.ParentCommentId; });
    var getReplies = function (id) {
        return comments.filter(function (c) { return c.ParentCommentId === id; });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { maxWidth: 920, margin: "0 auto", padding: 20, color: thcColors.text } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginBottom: "20px" } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { style: { color: thcColors.primary, marginBottom: "6px", fontSize: "28px" } }, "Comments"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { color: thcColors.subtext, fontSize: "14px" } }, "Share feedback, ask questions, and reply to specific comments.")),
        message && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginBottom: "16px" } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.MessageBar, { messageBarType: messageType, isMultiline: false }, message))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                backgroundColor: thcColors.accentLight,
                border: "1px solid ".concat(thcColors.border),
                borderRadius: "18px",
                padding: "18px",
                marginBottom: "24px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)"
            } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.TextField, { label: "Add a comment", multiline: true, rows: 4, value: newComment, onChange: function (_, v) { return setNewComment(v || ""); } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: "14px" } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.PrimaryButton, { text: "Post Comment", styles: {
                        root: {
                            backgroundColor: thcColors.primary,
                            borderColor: thcColors.primary
                        },
                        rootHovered: {
                            backgroundColor: thcColors.primaryHover,
                            borderColor: thcColors.primaryHover
                        }
                    }, onClick: submitComment }))),
        loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading comments..."),
        !loading && topComments.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                border: "1px dashed ".concat(thcColors.border),
                borderRadius: "16px",
                padding: "20px",
                color: thcColors.subtext,
                backgroundColor: thcColors.white
            } }, "No comments yet for this page.")),
        !loading &&
            topComments.map(function (comment) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: comment.Id, style: cardStyle },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", gap: "12px", alignItems: "flex-start" } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: initialsStyle(comment.AuthorTitle || "User") }, getInitials(comment.AuthorTitle)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { flex: 1 } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { fontWeight: 700, marginBottom: "4px", fontSize: "15px" } }, comment.AuthorTitle || "Unknown User"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { fontSize: "12px", color: thcColors.subtext, marginBottom: "10px" } }, formatDate(comment.Created)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { whiteSpace: "pre-wrap", lineHeight: 1.5, marginBottom: "12px" } }, comment.CommentText),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: actionRowStyle },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.DefaultButton, { text: replyingToId === comment.Id ? "Cancel Reply" : "Reply", styles: {
                                    root: {
                                        borderColor: thcColors.border,
                                        color: thcColors.primary
                                    }
                                }, onClick: function () {
                                    return setReplyingToId(replyingToId === comment.Id ? null : comment.Id || null);
                                } }),
                            isAdmin && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.DefaultButton, { text: "Archive", styles: {
                                    root: {
                                        borderColor: thcColors.border,
                                        color: thcColors.primary
                                    }
                                }, onClick: function () { return archiveComment(comment.Id); } }))),
                        replyingToId === comment.Id && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                                marginTop: "14px",
                                padding: "14px",
                                backgroundColor: thcColors.replyBg,
                                border: "1px solid ".concat(thcColors.border),
                                borderRadius: "14px"
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.TextField, { label: "Write a reply", multiline: true, rows: 3, value: replyText, onChange: function (_, v) { return setReplyText(v || ""); } }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: "10px" } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.PrimaryButton, { text: "Post Reply", styles: {
                                        root: {
                                            backgroundColor: thcColors.primary,
                                            borderColor: thcColors.primary
                                        },
                                        rootHovered: {
                                            backgroundColor: thcColors.primaryHover,
                                            borderColor: thcColors.primaryHover
                                        }
                                    }, onClick: function () { return submitReply(comment.Id); } })))),
                        getReplies(comment.Id).length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: "18px", marginLeft: "10px" } }, getReplies(comment.Id).map(function (reply) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: reply.Id, style: replyCardStyle },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", gap: "10px", alignItems: "flex-start" } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, initialsStyle(reply.AuthorTitle || "User")), { width: "30px", height: "30px", minWidth: "30px", fontSize: "12px" }) }, getInitials(reply.AuthorTitle)),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { flex: 1 } },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { fontWeight: 600, marginBottom: "4px", fontSize: "14px" } }, reply.AuthorTitle || "Unknown User"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { fontSize: "12px", color: thcColors.subtext, marginBottom: "8px" } }, formatDate(reply.Created)),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { whiteSpace: "pre-wrap", lineHeight: 1.5, marginBottom: "10px" } }, reply.CommentText),
                                    isAdmin && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.DefaultButton, { text: "Archive", styles: {
                                            root: {
                                                borderColor: thcColors.border,
                                                color: thcColors.primary
                                            }
                                        }, onClick: function () { return archiveComment(reply.Id); } })))))); }))))))); })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageComments);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c104aa62077b78749871")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=page-comments-web-part.e0ce251ef2293ad0119e.hot-update.js.map