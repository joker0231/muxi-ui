/// <reference types="react" />
/**
 * 带字段的输入框
 */
import Input from "../../Input";
import { IFieldInputProps } from "../../interface";
declare class FieldInput extends Input<IFieldInputProps> {
    render(): JSX.Element;
}
export default FieldInput;
