import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import PageComments from "./components/PageComments";
import { IPageCommentsProps } from "./components/PageComments";

export interface IPageCommentsWebPartProps {
  description: string;
}

export default class PageCommentsWebPart extends BaseClientSideWebPart<IPageCommentsWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IPageCommentsProps> = React.createElement(
      PageComments,
      {
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
                PropertyPaneTextField("description", {
                  label: "Description"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}