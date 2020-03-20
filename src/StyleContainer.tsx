import { Component, ReactNode, createElement } from "react";
import { ViewStyle } from "react-native";
import { StyleContainer as StyleContainerWrapper } from "./components/StyleContainer";
import { StyleContainerProps } from "../typings/StyleContainerProps";
import { Style } from "./utils/common";

export interface CustomStyle extends Style {
    container: ViewStyle;
}

export class StyleContainer extends Component<StyleContainerProps<CustomStyle>> {
    render(): ReactNode {
        const { content, backgroundColor, style } = this.props;

        return <StyleContainerWrapper 
            backgroundColor={backgroundColor?.value}
            style={style}>{content}</StyleContainerWrapper>;
    }
}
