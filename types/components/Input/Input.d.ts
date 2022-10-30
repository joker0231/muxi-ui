import React from "react";
import { PureComponent } from "react";
import { IBaseInputProps } from "./interface";
declare class Input<IProps> extends PureComponent<IBaseInputProps & IProps> {
    protected inputRef: React.RefObject<HTMLInputElement>;
    getInput(): HTMLInputElement;
    protected handleInputChange: () => void;
    /**
     * 处理焦点
     * @param isSelectAll 是否全选
     * @param isEnd 是否把光标定到最后
     */
    focus(isSelectAll?: boolean, isEnd?: boolean): void;
    isChineseInputting: boolean;
    protected handleCompositionStart: () => void;
    protected handleCompositionEnd: () => void;
    protected handleKeyDown: (e: React.KeyboardEvent) => void;
    render(): JSX.Element;
}
export default Input;
