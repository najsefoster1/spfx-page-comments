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
    // ---------- Styling ----------
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
        marginTop: "10px"
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
    // ---------- Helpers ----------
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
    // ---------- Admin Check ----------
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
                    isInOwnersGroup = data.value.some(function (group) {
                        return group.Title.toLowerCase().includes("owners");
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
    // ---------- Load Comments ----------
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
        loadComments();
        checkIfAdmin();
    }, []);
    // ---------- Actions ----------
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
    // ---------- Grouping ----------
    var topComments = comments.filter(function (c) { return !c.ParentCommentId; });
    var getReplies = function (id) { return comments.filter(function (c) { return c.ParentCommentId === id; }); };
    // ---------- UI ----------
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { maxWidth: 900, margin: "0 auto", padding: 20 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Comments"),
        message && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.MessageBar, { messageBarType: messageType }, message)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.TextField, { multiline: true, rows: 4, value: newComment, onChange: function (_, v) { return setNewComment(v || ""); } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.PrimaryButton, { text: "Post Comment", onClick: submitComment }),
        topComments.map(function (comment) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: comment.Id, style: cardStyle },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", gap: 12 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: initialsStyle(comment.AuthorTitle || "User") }, getInitials(comment.AuthorTitle)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { flex: 1 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, comment.AuthorTitle),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, formatDate(comment.Created)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, comment.CommentText),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: actionRowStyle },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.DefaultButton, { text: "Reply", onClick: function () {
                                return setReplyingToId(replyingToId === comment.Id ? null : comment.Id || null);
                            } }),
                        isAdmin && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.DefaultButton, { text: "Archive", onClick: function () { return archiveComment(comment.Id); } }))),
                    replyingToId === comment.Id && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.TextField, { multiline: true, rows: 3, value: replyText, onChange: function (_, v) { return setReplyText(v || ""); } }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.PrimaryButton, { text: "Post Reply", onClick: function () { return submitReply(comment.Id); } }))),
                    getReplies(comment.Id).map(function (reply) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: reply.Id, style: replyCardStyle },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, reply.AuthorTitle),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, reply.CommentText),
                        isAdmin && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.DefaultButton, { text: "Archive", onClick: function () { return archiveComment(reply.Id); } })))); }))))); })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageComments);


/***/ }),

/***/ 909:
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__909__;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e0ce251ef2293ad0119e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=page-comments-web-part.b0894b4c3a8832070f8f.hot-update.js.map