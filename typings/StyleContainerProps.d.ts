/**
 * This file was generated from StyleContainer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { EditableValue } from "mendix";
import { ReactNode } from "react";

interface CommonProps<Style> {
    name: string;
    style: Style[];
}

export interface StyleContainerProps<Style> extends CommonProps<Style> {
    content?: ReactNode;
    backgroundColor?: EditableValue<string>;
}
