import React from "react"
import {PureComponent} from "react";
import {IBaseInputProps} from "./interface";

class Input extends PureComponent<IBaseInputProps>{
  private inputRef = React.createRef<HTMLInputElement>()

  public getInput(): HTMLInputElement {
    return this.inputRef.current as HTMLInputElement  // 去除null，本组件inputRef一定存在
  }

  // 处理onChange事件，转换到外部的onChange
  private handleInputChange = () => {
    if(this.props.onChange) {
      this.props.onChange(this.getInput().value, this.isChineseInputting)
    }
  }

  /**
   * 处理焦点
   * @param isSelectAll 是否全选
   * @param isEnd 是否把光标定到最后
   */
  public focus(isSelectAll=false, isEnd = false):void {
    const input = this.getInput()
    input.focus()
    const {value} = input
    if(isSelectAll && value.length > 0) {  // 全选和光标到最后只能二选一
      input.select()
    } else if (isEnd) {
      input.value = value + ''
      input.value = value
    }
  }

  // 处理中文预输入
  public isChineseInputting = false  // 提供外部查询是否正在中文预输入
  private handleCompositionStart = () => {  // 中文预输入开始
    this.isChineseInputting =  true
  }
  private handleCompositionEnd = () => {  // 中文预输入结束
    this.isChineseInputting = false
    this.handleInputChange()
  }

  // 处理键盘按键
  private handleKeyDown = (e: React.KeyboardEvent) => {
    const {onEnter, onEsc, onKeyDown} = this.props
    if (onKeyDown) {
      onKeyDown(e)
    }
    const key = e.key  // todo 封装KeyHelper，将一些code转换为Enter等寓意变量
    if(onEnter && key === 'Enter') {
      onEnter()
      return
    }
    if(onEsc && key === 'Esc') {
      onEsc()
      return
    }
  }

  public render() {
    const {className, iconType, disabled, errorText, style, ...inputProps} = this.props
    if(inputProps.hasOwnProperty('value')  && (inputProps.value === null || inputProps.value === undefined)) { // 如果inputProps没有value字段，加一个空的
      // @ts-ignore
      inputProps.value = ''
    }
    // 删除多余事件（不直接透传到input上）
    delete inputProps.autoFocus
    delete inputProps.autoSelect
    delete inputProps.onEnter
    delete inputProps.onEsc
  //   const cs = React.classNames({
  //     'wowui-input': 1,
  //     'input-white': whiteTheme,
  //     'input-has-error': errorText,
  //     'input-has-icon': iconType,
  //     'disabled': disabled,
  //   }, className)
  //   return (
  //     <Tooltip title={errorToolTip} visible={!!errorToolTip}>
  //       <div className={cs} style={style}>
  //         {
  //           !!iconType &&
  //             <div className="input-icon-warp">
  //                 <Icon iconType={iconType}/>
  //             </div>
  //         }
  //         <input ref={this.refInput} type="text" {...inputProps}
  //                onChange={this.handleInputChange} onKeyDown={this.handleKeyDown}
  //                onCompositionStart={this.handleCompositionStart}
  //                onCompositionEnd={this.handleCompositionEnd}/>
  //         {
  //           !!errorText &&
  //             <div className="input-error-text">{errorText}</div>
  //         }
  //       </div>
  //     </Tooltip>
  //   )
  // }
    return <div>Input组件</div>
  }
}