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
        !loading && comments.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "No comments yet for this page.")),
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


/***/ }),

/***/ 824:
/*!**************************************************************!*\
  !*** ./node_modules/@fluentui/react-hooks/lib/useBoolean.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useBoolean: () => (/* binding */ useBoolean)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ 5559);


/**
 * Hook to store a value and generate callbacks for setting the value to true or false.
 * The identity of the callbacks will always stay the same.
 *
 * @param initialState - Initial value
 * @returns Array with the current value and an object containing the updater callbacks.
 */
function useBoolean(initialState) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialState), value = _a[0], setValue = _a[1];
    var setTrue = (0,_useConst__WEBPACK_IMPORTED_MODULE_1__.useConst)(function () { return function () {
        setValue(true);
    }; });
    var setFalse = (0,_useConst__WEBPACK_IMPORTED_MODULE_1__.useConst)(function () { return function () {
        setValue(false);
    }; });
    var toggle = (0,_useConst__WEBPACK_IMPORTED_MODULE_1__.useConst)(function () { return function () {
        setValue(function (currentValue) { return !currentValue; });
    }; });
    return [value, { setTrue: setTrue, setFalse: setFalse, toggle: toggle }];
}


/***/ }),

/***/ 533:
/*!*************************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconButton: () => (/* binding */ IconButton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ 1045);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Utilities */ 2727);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Utilities */ 5004);
/* harmony import */ var _IconButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconButton.styles */ 857);





/**
 * {@docCategory Button}
 */
var IconButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(IconButton, _super);
    function IconButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseButton__WEBPACK_IMPORTED_MODULE_2__.BaseButton, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, this.props, { variantClassName: "ms-Button--icon", styles: (0,_IconButton_styles__WEBPACK_IMPORTED_MODULE_3__.getStyles)(theme, styles), onRenderText: _Utilities__WEBPACK_IMPORTED_MODULE_4__.nullRender, onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_4__.nullRender })));
    };
    IconButton = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.customizable)('IconButton', ['theme', 'styles'], true)
    ], IconButton);
    return IconButton;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ 857:
/*!********************************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.styles.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Styling */ 8455);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utilities */ 5659);
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseButton.styles */ 8657);
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ 4129);




var getStyles = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.memoizeFunction)(function (theme, customStyles) {
    var _a;
    var baseButtonStyles = (0,_BaseButton_styles__WEBPACK_IMPORTED_MODULE_1__.getStyles)(theme);
    var splitButtonStyles = (0,_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_2__.getStyles)(theme);
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var iconButtonStyles = {
        root: {
            padding: '0 4px',
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent',
            border: 'none',
            color: semanticColors.link,
        },
        rootHovered: (_a = {
                color: palette.themeDarkAlt,
                backgroundColor: palette.neutralLighter
            },
            _a[_Styling__WEBPACK_IMPORTED_MODULE_3__.HighContrastSelector] = {
                borderColor: 'Highlight',
                color: 'Highlight',
            },
            _a),
        rootHasMenu: {
            width: 'auto',
        },
        rootPressed: {
            color: palette.themeDark,
            backgroundColor: palette.neutralLight,
        },
        rootExpanded: {
            color: palette.themeDark,
            backgroundColor: palette.neutralLight,
        },
        rootChecked: {
            color: palette.themeDark,
            backgroundColor: palette.neutralLight,
        },
        rootCheckedHovered: {
            color: palette.themeDark,
            backgroundColor: palette.neutralQuaternaryAlt,
        },
        rootDisabled: {
            color: palette.neutralTertiaryAlt,
        },
    };
    return (0,_Styling__WEBPACK_IMPORTED_MODULE_3__.concatStyleSets)(baseButtonStyles, iconButtonStyles, splitButtonStyles, customStyles);
});


/***/ }),

/***/ 669:
/*!***********************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/MessageBar/MessageBar.base.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageBarBase: () => (/* binding */ MessageBarBase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ 3583);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities */ 7974);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Utilities */ 8972);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Utilities */ 2021);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Button */ 533);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Icon */ 2394);
/* harmony import */ var _MessageBar_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageBar.types */ 643);
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-hooks */ 824);
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-hooks */ 8555);
var _a;







var ICON_MAP = (_a = {},
    _a[_MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.info] = 'Info',
    _a[_MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.warning] = 'Info',
    _a[_MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.error] = 'ErrorBadge',
    _a[_MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.blocked] = 'Blocked2',
    _a[_MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.severeWarning] = 'Warning',
    _a[_MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.success] = 'Completed',
    _a);
var COMPONENT_NAME = 'MessageBar';
var getClassNames = (0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.classNamesFunction)();
var getAnnouncementPriority = function (messageBarType) {
    switch (messageBarType) {
        case _MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.blocked:
        case _MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.error:
        case _MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.severeWarning:
            return 'assertive';
    }
    return 'polite';
};
var getRole = function (messageBarType) {
    switch (messageBarType) {
        case _MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.blocked:
        case _MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.error:
        case _MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.severeWarning:
            return 'alert';
    }
    return 'status';
};
var MessageBarBase = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
    var _a = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_3__.useBoolean)(false), expandSingleLine = _a[0], toggleExpandSingleLine = _a[1].toggle;
    var labelId = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_4__.useId)('MessageBar');
    var actions = props.actions, className = props.className, children = props.children, 
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    overflowButtonAriaLabel = props.overflowButtonAriaLabel, dismissIconProps = props.dismissIconProps, styles = props.styles, theme = props.theme, _b = props.messageBarType, messageBarType = _b === void 0 ? _MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.info : _b, _c = props.onDismiss, onDismiss = _c === void 0 ? undefined : _c, _d = props.isMultiline, isMultiline = _d === void 0 ? true : _d, truncated = props.truncated, dismissButtonAriaLabel = props.dismissButtonAriaLabel, messageBarIconProps = props.messageBarIconProps, role = props.role, _e = props.delayedRender, delayedRender = _e === void 0 ? true : _e, expandButtonProps = props.expandButtonProps, _f = props.onExpandButtonToggled, onExpandButtonToggled = _f === void 0 ? undefined : _f, showExpandButton = props.showExpandButton;
    // Wrap 'toggleExpandSingleLine' to execute the 'onExpandButtonToggled' callback whenever the expand button toggles
    var handleToggleExpandSingleLine = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
        toggleExpandSingleLine();
        if (onExpandButtonToggled) {
            // We use the opposite of 'expandSingleLine' here because at this point the useBoolean's
            // useState hasn't been updated yet.
            onExpandButtonToggled(!expandSingleLine);
        }
    }, [expandSingleLine, onExpandButtonToggled, toggleExpandSingleLine]);
    var nativeProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.getNativeProps)(props, _Utilities__WEBPACK_IMPORTED_MODULE_5__.htmlElementProperties, [
        'className',
        'role',
    ]);
    var classNames = getClassNames(styles, {
        theme: theme,
        messageBarType: messageBarType || _MessageBar_types__WEBPACK_IMPORTED_MODULE_1__.MessageBarType.info,
        onDismiss: onDismiss !== undefined,
        actions: actions !== undefined,
        truncated: truncated,
        isMultiline: isMultiline,
        expandSingleLine: expandSingleLine,
        className: className,
    });
    var expandIconProps = { iconName: expandSingleLine ? 'DoubleChevronUp' : 'DoubleChevronDown' };
    var regionProps = actions || onDismiss ? { 'aria-describedby': labelId, role: 'region' } : {};
    var actionsDiv = actions ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classNames.actions }, actions) : null;
    var dismissButton = onDismiss ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.IconButton, { disabled: false, className: classNames.dismissal, onClick: onDismiss, iconProps: dismissIconProps ? dismissIconProps : { iconName: 'Clear' }, title: dismissButtonAriaLabel, ariaLabel: dismissButtonAriaLabel })) : null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({ ref: ref, className: classNames.root }, regionProps),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classNames.content },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classNames.iconContainer, "aria-hidden": true }, messageBarIconProps ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_8__.Icon, (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, messageBarIconProps, { className: (0,_Utilities__WEBPACK_IMPORTED_MODULE_9__.css)(classNames.icon, messageBarIconProps.className) }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_8__.Icon, { iconName: ICON_MAP[messageBarType], className: classNames.icon }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classNames.text, id: labelId, role: role || getRole(messageBarType), "aria-live": getAnnouncementPriority(messageBarType) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({ className: classNames.innerText }, nativeProps), delayedRender ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utilities__WEBPACK_IMPORTED_MODULE_10__.DelayedRender, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, children))) : (
                // this span is probably not necessary, but preserving it for now in case anyone
                // has styling that expects it to be present
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, children)))),
            /* singleline expand/collapse button */ (showExpandButton || (!isMultiline && !actionsDiv && truncated)) && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classNames.expandSingleLine },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.IconButton, (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({ disabled: false, className: classNames.expand, onClick: handleToggleExpandSingleLine, iconProps: expandIconProps, ariaLabel: overflowButtonAriaLabel, "aria-expanded": expandSingleLine }, expandButtonProps)))), /* singleline actions */
            !isMultiline && actionsDiv,
            /* singleline dismiss */ !isMultiline && dismissButton && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classNames.dismissSingleLine }, dismissButton)), /* multiline dismiss */
            isMultiline && dismissButton), /* multiline actions */
        isMultiline && actionsDiv));
});
MessageBarBase.displayName = COMPONENT_NAME;


/***/ }),

/***/ 208:
/*!******************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/MessageBar/MessageBar.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageBar: () => (/* binding */ MessageBar)
/* harmony export */ });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ 5336);
/* harmony import */ var _MessageBar_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageBar.base */ 669);
/* harmony import */ var _MessageBar_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageBar.styles */ 514);



var MessageBar = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.styled)(_MessageBar_base__WEBPACK_IMPORTED_MODULE_1__.MessageBarBase, _MessageBar_styles__WEBPACK_IMPORTED_MODULE_2__.getStyles, undefined, {
    scope: 'MessageBar',
});


/***/ }),

/***/ 514:
/*!*************************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/MessageBar/MessageBar.styles.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 196);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ 8455);
/* harmony import */ var _MessageBar_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageBar.types */ 643);
var _a, _b, _c, _d;



var GlobalClassNames = {
    root: 'ms-MessageBar',
    error: 'ms-MessageBar--error',
    blocked: 'ms-MessageBar--blocked',
    severeWarning: 'ms-MessageBar--severeWarning',
    success: 'ms-MessageBar--success',
    warning: 'ms-MessageBar--warning',
    multiline: 'ms-MessageBar-multiline',
    singleline: 'ms-MessageBar-singleline',
    dismissalSingleLine: 'ms-MessageBar-dismissalSingleLine',
    expandingSingleLine: 'ms-MessageBar-expandingSingleLine',
    content: 'ms-MessageBar-content',
    iconContainer: 'ms-MessageBar-icon',
    text: 'ms-MessageBar-text',
    innerText: 'ms-MessageBar-innerText',
    dismissSingleLine: 'ms-MessageBar-dismissSingleLine',
    expandSingleLine: 'ms-MessageBar-expandSingleLine',
    dismissal: 'ms-MessageBar-dismissal',
    expand: 'ms-MessageBar-expand',
    actions: 'ms-MessageBar-actions',
    actionsSingleline: 'ms-MessageBar-actionsSingleLine',
};
var backgroundColor = (_a = {},
    _a[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.error] = 'errorBackground',
    _a[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.blocked] = 'errorBackground',
    _a[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.success] = 'successBackground',
    _a[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.warning] = 'warningBackground',
    _a[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.severeWarning] = 'severeWarningBackground',
    _a[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.info] = 'infoBackground',
    _a);
var iconColor = (_b = {},
    _b[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.error] = 'errorIcon',
    _b[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.blocked] = 'errorIcon',
    _b[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.success] = 'successIcon',
    _b[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.warning] = 'warningIcon',
    _b[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.severeWarning] = 'severeWarningIcon',
    _b[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.info] = 'infoIcon',
    _b);
var highContrastBorderColor = (_c = {},
    _c[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.error] = '#ff0000',
    _c[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.blocked] = '#ff0000',
    _c[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.success] = '#bad80a',
    _c[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.warning] = '#fff100',
    _c[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.severeWarning] = '#ff0000',
    _c[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.info] = 'WindowText',
    _c);
var highContrastWhiteBorderColor = (_d = {},
    _d[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.error] = '#e81123',
    _d[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.blocked] = '#e81123',
    _d[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.success] = '#107c10',
    _d[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.warning] = '#966400',
    _d[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.severeWarning] = '#d83b01',
    _d[_MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.info] = 'WindowText',
    _d);
var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var theme = props.theme, className = props.className, onDismiss = props.onDismiss, truncated = props.truncated, isMultiline = props.isMultiline, expandSingleLine = props.expandSingleLine, _m = props.messageBarType, messageBarType = _m === void 0 ? _MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.info : _m;
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var SmallScreenSelector = (0,_Styling__WEBPACK_IMPORTED_MODULE_1__.getScreenSelector)(0, _Styling__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMaxSmall);
    var classNames = (0,_Styling__WEBPACK_IMPORTED_MODULE_1__.getGlobalClassNames)(GlobalClassNames, theme);
    var dismissalAndExpandIconStyle = {
        fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__.IconFontSizes.xSmall,
        height: 10,
        lineHeight: '10px',
        color: semanticColors.messageText,
        selectors: (_a = {},
            _a[_Styling__WEBPACK_IMPORTED_MODULE_1__.HighContrastSelector] = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, (0,_Styling__WEBPACK_IMPORTED_MODULE_1__.getHighContrastNoAdjustStyle)()), { color: 'WindowText' }),
            _a),
    };
    var dismissalAndExpandStyle = [
        (0,_Styling__WEBPACK_IMPORTED_MODULE_1__.getFocusStyle)(theme, {
            inset: 1,
            highContrastStyle: {
                outlineOffset: '-6px',
                outline: '1px solid Highlight',
            },
            borderColor: 'transparent',
        }),
        {
            flexShrink: 0,
            width: 32,
            height: 32,
            padding: '8px 12px',
            selectors: {
                '& .ms-Button-icon': dismissalAndExpandIconStyle,
                ':hover': {
                    backgroundColor: 'transparent',
                },
                ':active': {
                    backgroundColor: 'transparent',
                },
            },
        },
    ];
    return {
        root: [
            classNames.root,
            fonts.medium,
            messageBarType === _MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.error && classNames.error,
            messageBarType === _MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.blocked && classNames.blocked,
            messageBarType === _MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.severeWarning && classNames.severeWarning,
            messageBarType === _MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.success && classNames.success,
            messageBarType === _MessageBar_types__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.warning && classNames.warning,
            isMultiline ? classNames.multiline : classNames.singleline,
            !isMultiline && onDismiss && classNames.dismissalSingleLine,
            !isMultiline && truncated && classNames.expandingSingleLine,
            {
                background: semanticColors[backgroundColor[messageBarType]],
                boxSizing: 'border-box',
                color: semanticColors.messageText,
                minHeight: 32,
                width: '100%',
                display: 'flex',
                wordBreak: 'break-word',
                selectors: (_b = {
                        '.ms-Link': {
                            color: semanticColors.messageLink,
                            selectors: {
                                ':hover': {
                                    color: semanticColors.messageLinkHovered,
                                },
                            },
                        }
                    },
                    _b[_Styling__WEBPACK_IMPORTED_MODULE_1__.HighContrastSelector] = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, (0,_Styling__WEBPACK_IMPORTED_MODULE_1__.getHighContrastNoAdjustStyle)()), { background: 'transparent', border: "1px solid ".concat(highContrastBorderColor[messageBarType]), color: 'WindowText' }),
                    _b[_Styling__WEBPACK_IMPORTED_MODULE_1__.HighContrastSelectorWhite] = {
                        border: "1px solid ".concat(highContrastWhiteBorderColor[messageBarType]),
                    },
                    _b),
            },
            isMultiline && {
                flexDirection: 'column',
            },
            className,
        ],
        content: [
            classNames.content,
            (_c = {
                    display: 'flex',
                    width: '100%',
                    lineHeight: 'normal'
                },
                _c[SmallScreenSelector] = {
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gridTemplateRows: '1fr auto',
                    gridTemplateAreas: "\n            \"icon text close\"\n            \"action action action\"\n          ",
                },
                _c),
        ],
        iconContainer: [
            classNames.iconContainer,
            (_d = {
                    fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__.IconFontSizes.medium,
                    minWidth: 16,
                    minHeight: 16,
                    display: 'flex',
                    flexShrink: 0,
                    margin: '8px 0 8px 12px'
                },
                _d[SmallScreenSelector] = {
                    gridArea: 'icon',
                },
                _d),
        ],
        icon: {
            color: semanticColors[iconColor[messageBarType]],
            selectors: (_e = {},
                _e[_Styling__WEBPACK_IMPORTED_MODULE_1__.HighContrastSelector] = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, (0,_Styling__WEBPACK_IMPORTED_MODULE_1__.getHighContrastNoAdjustStyle)()), { color: 'WindowText' }),
                _e),
        },
        text: [
            classNames.text,
            (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ minWidth: 0, display: 'flex', flexGrow: 1, margin: 8 }, fonts.small), (_f = {}, _f[SmallScreenSelector] = {
                gridArea: 'text',
            }, _f.selectors = (_g = {},
                _g[_Styling__WEBPACK_IMPORTED_MODULE_1__.HighContrastSelector] = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, (0,_Styling__WEBPACK_IMPORTED_MODULE_1__.getHighContrastNoAdjustStyle)()),
                _g), _f)),
            !onDismiss && {
                marginRight: 12,
            },
        ],
        innerText: [
            classNames.innerText,
            {
                lineHeight: 16,
                selectors: {
                    '& span a:last-child': {
                        paddingLeft: 4,
                    },
                },
            },
            truncated && {
                overflow: 'visible',
                whiteSpace: 'pre-wrap',
            },
            !isMultiline && {
                // In high contrast this causes the top and bottom of links' focus outline to be clipped
                // (not sure of a good way around that while still maintaining text clipping)
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
            !isMultiline &&
                !truncated && {
                selectors: (_h = {},
                    _h[SmallScreenSelector] = {
                        overflow: 'visible',
                        whiteSpace: 'pre-wrap',
                    },
                    _h),
            },
            expandSingleLine && {
                overflow: 'visible',
                whiteSpace: 'pre-wrap',
            },
        ],
        dismissSingleLine: [
            classNames.dismissSingleLine,
            (_j = {},
                _j[SmallScreenSelector] = {
                    gridArea: 'close',
                },
                _j),
        ],
        expandSingleLine: classNames.expandSingleLine,
        dismissal: [classNames.dismissal, dismissalAndExpandStyle],
        expand: [classNames.expand, dismissalAndExpandStyle],
        actions: [
            isMultiline ? classNames.actions : classNames.actionsSingleline,
            (_k = {
                    display: 'flex',
                    flexGrow: 0,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    margin: '0 12px 0 8px',
                    // reset forced colors to browser control for inner actions
                    forcedColorAdjust: 'auto',
                    MsHighContrastAdjust: 'auto'
                },
                _k[SmallScreenSelector] = {
                    gridArea: 'action',
                    marginRight: 8,
                    marginBottom: 8,
                },
                _k.selectors = {
                    '& button:nth-child(n+2)': (_l = {
                            marginLeft: 8
                        },
                        _l[SmallScreenSelector] = {
                            marginBottom: 0,
                        },
                        _l),
                },
                _k),
            isMultiline && {
                marginBottom: 8,
            },
            onDismiss &&
                !isMultiline && {
                marginRight: 0,
            },
        ],
    };
};


/***/ }),

/***/ 643:
/*!************************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/MessageBar/MessageBar.types.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageBarType: () => (/* binding */ MessageBarType)
/* harmony export */ });
/**
 * {@docCategory MessageBar}
 */
var MessageBarType;
(function (MessageBarType) {
    /** Info styled MessageBar */
    MessageBarType[MessageBarType["info"] = 0] = "info";
    /** Error styled MessageBar */
    MessageBarType[MessageBarType["error"] = 1] = "error";
    /** Blocked styled MessageBar */
    MessageBarType[MessageBarType["blocked"] = 2] = "blocked";
    /** SevereWarning styled MessageBar */
    MessageBarType[MessageBarType["severeWarning"] = 3] = "severeWarning";
    /** Success styled MessageBar */
    MessageBarType[MessageBarType["success"] = 4] = "success";
    /** Warning styled MessageBar */
    MessageBarType[MessageBarType["warning"] = 5] = "warning";
})(MessageBarType || (MessageBarType = {}));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("46bb04bbe2109da79fb8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=page-comments-web-part.69d454950dc560f3b5d2.hot-update.js.map