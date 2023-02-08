import React, { PureComponent } from 'react'

import classNames from 'classnames'
import { type IBaseInputProps } from '../interface'

class Index<IProps> extends PureComponent<IBaseInputProps & IProps> {
    // todo：感觉这个ts有问题，应该是覆盖
    protected inputRef = React.createRef<HTMLTextAreaElement>()

    public getInput(): HTMLTextAreaElement {
        return this.inputRef.current as HTMLTextAreaElement // 去除null，本组件inputRef一定存在
    }

    // 处理onChange事件，转换到外部的onChange
    protected handleInputChange = () => {
        if (this.props.onChange != null) {
            this.props.onChange(this.getInput().value, this.isChineseInputting)
        }
    }

    /**
     * 处理焦点
     * @param isSelectAll 是否全选
     * @param isEnd 是否把光标定到最后
     */
    public focus(isSelectAll = false, isEnd = false): void {
        const input = this.getInput()
        input.focus()
        const { value } = input
        if (isSelectAll && value.length > 0) {
            // 全选和光标到最后只能二选一
            input.select()
        } else if (isEnd) {
            input.value = `${value}`
            input.value = value
        }
    }

    // 处理中文预输入
    public isChineseInputting = false // 提供外部查询是否正在中文预输入

    protected handleCompositionStart = () => {
        // 中文预输入开始
        this.isChineseInputting = true
    }

    protected handleCompositionEnd = () => {
        // 中文预输入结束
        this.isChineseInputting = false
        this.handleInputChange()
    }

    // 处理键盘按键
    protected handleKeyDown = (e: React.KeyboardEvent) => {
        const { onEnter, onEsc, onKeyDown } = this.props
        if (onKeyDown) {
            onKeyDown(e)
        }
        const { key } = e // todo 封装KeyHelper，将一些code转换为Enter等寓意变量
        if (onEnter != null && key === 'Enter') {
            onEnter()
            return
        }
        if (onEsc != null && key === 'Esc') {
            onEsc()
        }
    }

    public render() {
        const { className, iconType, disabled, errorText, style, ...inputProps } = this.props
        if (
            Object.prototype.hasOwnProperty.call(inputProps, 'value') &&
            (inputProps.value === null || inputProps.value === undefined)
        ) {
            // 如果inputProps没有value字段，加一个空的
            // @ts-expect-error 测试1
            inputProps.value = ''
        }
        // 删除多余事件（不直接透传到input上）
        delete inputProps.autoFocus
        delete inputProps.autoSelect
        delete inputProps.onEnter
        delete inputProps.onEsc
        const cs = classNames(
            {
                'wowui-input': 1,
                'input-has-error': errorText,
                'input-has-icon': iconType,
                disabled
            },
            className
        )
        console.log(disabled, 'syp-disabled')
        return (
            <div className={cs} style={style}>
                {!(iconType == null) && (
                    <div className="input-icon-warp">
                        {/* todo: Icon组件 */}
                        {/* <Index iconType={iconType}/> */}
                    </div>
                )}
                <textarea
                    ref={this.inputRef}
                    type="text"
                    {...inputProps}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                    onCompositionStart={this.handleCompositionStart}
                    onCompositionEnd={this.handleCompositionEnd}
                    disabled={disabled}
                />
                {!(errorText == null) && <div className="input-error-text">{errorText}</div>}
            </div>
        )
    }
}

export default Index
