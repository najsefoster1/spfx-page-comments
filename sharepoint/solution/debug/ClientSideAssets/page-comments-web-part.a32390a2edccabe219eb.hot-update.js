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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ 643);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ 208);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ 7102);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ 9425);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ 5613);
/* harmony import */ var _services_CommentService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/CommentService */ 7094);





var PageComments = function (_a) {
    var context = _a.context;
    var service = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return new _services_CommentService__WEBPACK_IMPORTED_MODULE_1__.CommentService(context); }, [context]);
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), comments = _b[0], setComments = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), newComment = _c[0], setNewComment = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), message = _d[0], setMessage = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.info), messageType = _e[0], setMessageType = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), loading = _f[0], setLoading = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), replyingToId = _g[0], setReplyingToId = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), replyText = _h[0], setReplyText = _h[1];
    var pageUrl = window.location.pathname;
    var cardStyle = {
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "18px",
        marginBottom: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)"
    };
    var replyCardStyle = {
        borderLeft: "3px solid #c7d2fe",
        backgroundColor: "#f8fafc",
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
        backgroundColor: "#e0e7ff",
        color: "#3730a3",
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
            return parts[0].charAt(0).toUpperCase();
        return "".concat(parts[0].charAt(0)).concat(parts[1].charAt(0)).toUpperCase();
    };
    var formatDate = function (date) {
        if (!date)
            return "";
        return new Date(date).toLocaleString();
    };
    var loadComments = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(void 0, void 0, void 0, function () {
        var data, _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_b) {
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
                    setMessage("Unable to load comments for this page.");
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.error);
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
            setMessage("Unable to load comments for this page.");
            setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.error);
        });
    }, []);
    var submitComment = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(void 0, void 0, void 0, function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!newComment.trim()) {
                        setMessage("Please enter a comment.");
                        setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.warning);
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
                    setMessage("Your comment was posted successfully.");
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.success);
                    setTimeout(function () {
                        setMessage("");
                    }, 3000);
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    setMessage("Unable to submit your comment.");
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.error);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var submitReply = function (parentId) { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(void 0, void 0, void 0, function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!replyText.trim()) {
                        setMessage("Please enter a reply.");
                        setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.warning);
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
                    setMessage("Your reply was posted successfully.");
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.success);
                    setTimeout(function () {
                        setMessage("");
                    }, 3000);
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    setMessage("Unable to submit your reply.");
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.error);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var archiveComment = function (commentId) { return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(void 0, void 0, void 0, function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!commentId)
                        return [2 /*return*/];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, service.archiveComment(commentId)];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, loadComments()];
                case 3:
                    _b.sent();
                    setMessage("The comment was archived.");
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.success);
                    setTimeout(function () {
                        setMessage("");
                    }, 3000);
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    setMessage("Unable to archive this comment.");
                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.error);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var topLevelComments = comments.filter(function (comment) { return !comment.ParentCommentId; });
    var getReplies = function (parentId) {
        return comments.filter(function (comment) { return comment.ParentCommentId === parentId; });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { maxWidth: "920px", margin: "0 auto", padding: "20px" } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginBottom: "20px" } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { style: { marginBottom: "6px", fontSize: "28px" } }, "Comments"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { color: "#6b7280", fontSize: "14px" } }, "Share feedback, ask questions, and reply to specific comments.")),
        message && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginBottom: "16px" } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.MessageBar, { messageBarType: messageType, isMultiline: false }, message))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "18px",
                padding: "18px",
                marginBottom: "24px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)"
            } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.TextField, { label: "Add a comment", multiline: true, rows: 4, value: newComment, onChange: function (_, value) { return setNewComment(value || ""); } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: "14px" } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.PrimaryButton, { text: "Post Comment", onClick: function () {
                        submitComment().catch(function () {
                            setMessage("Unable to submit your comment.");
                            setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.error);
                        });
                    } }))),
        loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading comments..."),
        !loading && topLevelComments.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                border: "1px dashed #d1d5db",
                borderRadius: "16px",
                padding: "20px",
                color: "#6b7280",
                backgroundColor: "#ffffff"
            } }, "No comments yet for this page.")),
        !loading &&
            topLevelComments.map(function (comment) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: comment.Id, style: cardStyle },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", gap: "12px", alignItems: "flex-start" } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: initialsStyle(comment.AuthorTitle || "User") }, getInitials(comment.AuthorTitle)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { flex: 1 } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { fontWeight: 700, marginBottom: "4px", fontSize: "15px" } }, comment.AuthorTitle || "Unknown User"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { fontSize: "12px", color: "#6b7280", marginBottom: "10px" } }, formatDate(comment.Created)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { whiteSpace: "pre-wrap", lineHeight: 1.5, marginBottom: "12px" } }, comment.CommentText),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: actionRowStyle },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.DefaultButton, { text: replyingToId === comment.Id ? "Cancel Reply" : "Reply", onClick: function () {
                                    if (replyingToId === comment.Id) {
                                        setReplyingToId(null);
                                        setReplyText("");
                                    }
                                    else {
                                        setReplyingToId(comment.Id || null);
                                        setReplyText("");
                                    }
                                } }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.DefaultButton, { text: "Archive", onClick: function () {
                                    archiveComment(comment.Id).catch(function () {
                                        setMessage("Unable to archive this comment.");
                                        setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.error);
                                    });
                                } })),
                        replyingToId === comment.Id && comment.Id && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                                marginTop: "14px",
                                padding: "14px",
                                backgroundColor: "#f9fafb",
                                border: "1px solid #e5e7eb",
                                borderRadius: "14px"
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.TextField, { label: "Write a reply", multiline: true, rows: 3, value: replyText, onChange: function (_, value) { return setReplyText(value || ""); } }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: "10px" } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.PrimaryButton, { text: "Post Reply", onClick: function () {
                                        submitReply(comment.Id).catch(function () {
                                            setMessage("Unable to submit your reply.");
                                            setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.error);
                                        });
                                    } })))),
                        comment.Id && getReplies(comment.Id).length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: "18px", marginLeft: "10px" } }, getReplies(comment.Id).map(function (reply) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: reply.Id, style: replyCardStyle },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", gap: "10px", alignItems: "flex-start" } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, initialsStyle(reply.AuthorTitle || "User")), { width: "30px", height: "30px", minWidth: "30px", fontSize: "12px" }) }, getInitials(reply.AuthorTitle)),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { flex: 1 } },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { fontWeight: 600, marginBottom: "4px", fontSize: "14px" } }, reply.AuthorTitle || "Unknown User"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { fontSize: "12px", color: "#6b7280", marginBottom: "8px" } }, formatDate(reply.Created)),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { whiteSpace: "pre-wrap", lineHeight: 1.5, marginBottom: "10px" } }, reply.CommentText),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.DefaultButton, { text: "Archive", onClick: function () {
                                            archiveComment(reply.Id).catch(function () {
                                                setMessage("Unable to archive this comment.");
                                                setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.error);
                                            });
                                        } }))))); }))))))); })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageComments);


/***/ }),

/***/ 7094:
/*!**************************************************************!*\
  !*** ./lib/webparts/pageComments/services/CommentService.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommentService: () => (/* binding */ CommentService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 196);
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/sp */ 2011);
/* harmony import */ var _pnp_sp_behaviors_spfx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/sp/behaviors/spfx */ 9754);
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp/webs */ 7339);
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/lists */ 2185);
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/sp/items */ 5324);






var CommentService = /** @class */ (function () {
    function CommentService(context) {
        this._listTitle = "Page Comments";
        this._replyField = "ParentCommentID";
        this._archiveField = "IsArchived";
        this._archivedDateField = "ArchivedDate";
        this._sp = (0,_pnp_sp__WEBPACK_IMPORTED_MODULE_0__.spfi)().using((0,_pnp_sp_behaviors_spfx__WEBPACK_IMPORTED_MODULE_1__.SPFx)(context));
    }
    CommentService.prototype.getCommentsByPage = function (pageUrl) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            var escapedPageUrl, items, error_1;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        escapedPageUrl = pageUrl.replace(/'/g, "''");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._sp.web.lists
                                .getByTitle(this._listTitle)
                                .items
                                .select("Id", "Title", "CommentText", "PageUrl", this._replyField, this._archiveField, this._archivedDateField, "Created", "Author/Title")
                                .expand("Author")
                                .filter("PageUrl eq '".concat(escapedPageUrl, "' and (").concat(this._archiveField, " eq null or ").concat(this._archiveField, " eq 0)"))
                                .orderBy("Created", false)()];
                    case 2:
                        items = _a.sent();
                        return [2 /*return*/, items.map(function (item) {
                                var _a;
                                return ({
                                    Id: item.Id,
                                    Title: item.Title,
                                    CommentText: item.CommentText,
                                    PageUrl: item.PageUrl,
                                    ParentCommentId: item[_this._replyField],
                                    IsArchived: item[_this._archiveField],
                                    ArchivedDate: item[_this._archivedDateField],
                                    Created: item.Created,
                                    AuthorTitle: (_a = item.Author) === null || _a === void 0 ? void 0 : _a.Title
                                });
                            })];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Error loading comments:", error_1);
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CommentService.prototype.addComment = function (commentText, pageUrl, parentCommentId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            var trimmed, shortTitle, payload, error_2;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        trimmed = commentText.trim();
                        shortTitle = trimmed.length > 40 ? "".concat(trimmed.substring(0, 40), "...") : trimmed;
                        payload = {
                            Title: shortTitle || "Comment",
                            CommentText: trimmed,
                            PageUrl: pageUrl,
                            IsArchived: false
                        };
                        if (typeof parentCommentId === "number") {
                            payload[this._replyField] = parentCommentId;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._sp.web.lists.getByTitle(this._listTitle).items.add(payload)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.error("Error adding comment:", error_2);
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CommentService.prototype.archiveComment = function (commentId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            var error_3;
            var _a;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._sp.web.lists
                                .getByTitle(this._listTitle)
                                .items
                                .getById(commentId)
                                .update((_a = {},
                                _a[this._archiveField] = true,
                                _a[this._archivedDateField] = new Date().toISOString(),
                                _a))];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        console.error("Error archiving comment:", error_3);
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CommentService;
}());



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b0894b4c3a8832070f8f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=page-comments-web-part.a32390a2edccabe219eb.hot-update.js.map