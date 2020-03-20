import { Component, ReactNode, createElement } from "react";
import { View } from "react-native";

import { CustomStyle } from "../StyleContainer";
import { flattenStyles } from "../utils/common";

export interface StyleContainerProps {
    backgroundColor?: string;
    style: CustomStyle[];
}

const defaultStyle: CustomStyle = {
    container: { },
};

export class StyleContainer extends Component<StyleContainerProps> {
    render(): ReactNode {
        const { children, backgroundColor } = this.props;

        const styles = this.getStyles(backgroundColor);
        
        return (
            <View style={styles.container}>{children}</View>
        );
    }

    private getStyles(backgroundColor : string | undefined): CustomStyle {
        if (backgroundColor != undefined && backgroundColor != '') {
            const componentStyle: CustomStyle = {
                container: { 
                    backgroundColor: backgroundColor
                }
            };
            return flattenStyles(
                flattenStyles(componentStyle, [defaultStyle]),
                 this.props.style
            );    
        }
        return flattenStyles(defaultStyle, this.props.style);
    }
}
