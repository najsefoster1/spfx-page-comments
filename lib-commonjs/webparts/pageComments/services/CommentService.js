"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
var tslib_1 = require("tslib");
var sp_1 = require("@pnp/sp");
var spfx_1 = require("@pnp/sp/behaviors/spfx");
require("@pnp/sp/webs");
require("@pnp/sp/lists");
require("@pnp/sp/items");
var CommentService = /** @class */ (function () {
    function CommentService(context) {
        this._listTitle = "Page Comments";
        this._replyField = "ParentCommentID";
        this._archiveField = "IsArchived";
        this._archivedDateField = "ArchivedDate";
        this._sp = (0, sp_1.spfi)().using((0, spfx_1.SPFx)(context));
    }
    CommentService.prototype.getCommentsByPage = function (pageUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var escapedPageUrl, items, error_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var trimmed, shortTitle, payload, error_2;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_3;
            var _a;
            return tslib_1.__generator(this, function (_b) {
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
exports.CommentService = CommentService;
//# sourceMappingURL=CommentService.js.map