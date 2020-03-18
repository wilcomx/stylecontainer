import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { StyleContainerProps } from "../typings/StyleContainerProps";
import { Style } from "./utils/common";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export class StyleContainer extends Component<StyleContainerProps<CustomStyle>> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} style={this.props.style} />;
    }
}
