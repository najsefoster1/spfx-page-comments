"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDom = tslib_1.__importStar(require("react-dom"));
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_property_pane_1 = require("@microsoft/sp-property-pane");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var PageComments_1 = tslib_1.__importDefault(require("./components/PageComments"));
var PageCommentsWebPart = /** @class */ (function (_super) {
    tslib_1.__extends(PageCommentsWebPart, _super);
    function PageCommentsWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageCommentsWebPart.prototype.render = function () {
        var element = React.createElement(PageComments_1.default, {
            context: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    PageCommentsWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(PageCommentsWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    PageCommentsWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Page Comments settings"
                    },
                    groups: [
                        {
                            groupName: "Basic Settings",
                            groupFields: [
                                (0, sp_property_pane_1.PropertyPaneTextField)("description", {
                                    label: "Description"
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return PageCommentsWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = PageCommentsWebPart;
//# sourceMappingURL=PageCommentsWebPart.js.map