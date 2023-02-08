/**
 * 带字段的输入框
 */
import classNames from 'classnames'
import React, { Component } from 'react'
import { type IFieldInputProps } from '../interface'
import './index.less'

class MobileInput extends Component<IFieldInputProps> {
    state = {
        textValue: ''
    }

    componentDidMount() {
        console.log(123)
    }

    protected inputRef = React.createRef<HTMLTextAreaElement>()

    protected handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        this.setState(
            {
                textValue: e.target.value
            },
            () => {
                if (this.inputRef.current) {
                    if (this.inputRef.current.scrollHeight > 70) {
                        this.inputRef.current.scrollTop = this.inputRef.current.scrollHeight
                        return
                    }
                    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                    this.inputRef.current.style.height = this.inputRef.current.scrollHeight + 'px'
                }
            }
        )
    }

    componentDidUpdate() {
        if (this.inputRef.current) {
            if (this.inputRef.current.scrollHeight > 70) {
                this.inputRef.current.style.height = '70px'
                return
            }
            this.inputRef.current.style.height = 'auto'
        }
    }

    render() {
        // return super.render();
        const { className, iconType, disabled, errorText, style, filedName, ...inputProps } =
            this.props
        if (
            Object.prototype.hasOwnProperty.call(inputProps, 'value') &&
            (inputProps.value === null || inputProps.value === undefined)
        ) {
            // @ts-expect-error: 如果inputProps没有value字段，加一个空的
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
        return (
            <div className={cs} style={style}>
                {!(iconType == null) && (
                    <div className="input-icon-warp">
                        {/* todo: Icon组件 */}
                        {/* <Index iconType={iconType}/> */}
                    </div>
                )}
                <div>{filedName}：</div>
                <textarea
                    className={'color'}
                    ref={this.inputRef}
                    {...inputProps}
                    rows={1}
                    onChange={this.handleInputChange}
                    disabled={disabled}
                    value={this.state.textValue}
                />
                {!(errorText == null) && <div className="input-error-text">{errorText}</div>}
            </div>
        )
    }
}

export default MobileInput
