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
    var topLevelComments = comments.filter(function (comment) { return !comment.ParentCommentId; });
    var getReplies = function (parentId) {
        return comments.filter(function (comment) { return comment.ParentCommentId === parentId; });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { maxWidth: "900px", margin: "0 auto", padding: "16px" } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { style: { marginBottom: "16px" } }, "Comments"),
        message && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginBottom: "16px" } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.MessageBar, { messageBarType: messageType, isMultiline: false }, message))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.TextField, { label: "Add a comment", multiline: true, rows: 4, value: newComment, onChange: function (_, value) { return setNewComment(value || ""); } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: "12px", marginBottom: "24px" } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.PrimaryButton, { text: "Post Comment", onClick: function () {
                    submitComment().catch(function () {
                        setMessage("Unable to submit your comment.");
                        setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.error);
                    });
                } })),
        loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading comments..."),
        !loading && topLevelComments.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "No comments yet for this page.")),
        !loading &&
            topLevelComments.map(function (comment) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: comment.Id, style: {
                    border: "1px solid #e1e1e1",
                    borderRadius: "12px",
                    padding: "16px",
                    marginBottom: "16px",
                    backgroundColor: "#ffffff"
                } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { fontWeight: 600, marginBottom: "4px" } }, comment.AuthorTitle || "Unknown User"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { fontSize: "12px", color: "#666", marginBottom: "10px" } }, comment.Created ? new Date(comment.Created).toLocaleString() : ""),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { whiteSpace: "pre-wrap", marginBottom: "12px" } }, comment.CommentText),
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
                replyingToId === comment.Id && comment.Id && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: "12px" } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.TextField, { label: "Write a reply", multiline: true, rows: 3, value: replyText, onChange: function (_, value) { return setReplyText(value || ""); } }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: "8px" } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.PrimaryButton, { text: "Post Reply", onClick: function () {
                                submitReply(comment.Id).catch(function () {
                                    setMessage("Unable to submit your reply.");
                                    setMessageType(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.MessageBarType.error);
                                });
                            } })))),
                comment.Id && getReplies(comment.Id).length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: "16px", marginLeft: "24px" } }, getReplies(comment.Id).map(function (reply) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: reply.Id, style: {
                        borderLeft: "3px solid #d0d7de",
                        paddingLeft: "12px",
                        marginBottom: "12px"
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { fontWeight: 600, marginBottom: "4px" } }, reply.AuthorTitle || "Unknown User"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { fontSize: "12px", color: "#666", marginBottom: "8px" } }, reply.Created ? new Date(reply.Created).toLocaleString() : ""),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { whiteSpace: "pre-wrap" } }, reply.CommentText))); }))))); })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageComments);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a32390a2edccabe219eb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=page-comments-web-part.6e3cb0c2a3728ba652c2.hot-update.js.map