"use strict";
self["webpackHotUpdate_07c829ff_2a41_4d63_9775_a9e9f234618a_0_0_1"]("page-comments-web-part",{

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
        this._sp = (0,_pnp_sp__WEBPACK_IMPORTED_MODULE_0__.spfi)().using((0,_pnp_sp_behaviors_spfx__WEBPACK_IMPORTED_MODULE_1__.SPFx)(context));
    }
    CommentService.prototype.getCommentsByPage = function (pageUrl) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            var escapedPageUrl, items, error_1;
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
                                .select("Id", "Title", "CommentText", "PageUrl", "ParentCommentId", "Created", "Author/Title")
                                .expand("Author")
                                .filter("PageUrl eq '".concat(escapedPageUrl, "'"))
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
                                    ParentCommentId: item.ParentCommentId,
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
                            PageUrl: pageUrl
                        };
                        if (typeof parentCommentId === "number") {
                            payload.ParentCommentId = parentCommentId;
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
    return CommentService;
}());



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("76dc1f173436d9099bfb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=page-comments-web-part.46bb04bbe2109da79fb8.hot-update.js.map