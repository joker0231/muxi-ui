/**
 * 带字段的输入框
 */
import Input from "../../Input";
import {IFieldInputProps} from "../../interface";
import classNames from "classnames";
import React from "react";

class FieldInput extends Input<IFieldInputProps> {
  // 这里所有其他方法完全一直，只是添加了this.props.filedName，只用重写super.render方法即可
  public render(): JSX.Element {
    console.log(this.props.filedName)
    // return super.render();
    const {className, iconType, disabled, errorText, style, filedName,...inputProps} = this.props
    if(inputProps.hasOwnProperty('value')  && (inputProps.value === null || inputProps.value === undefined)) { // 如果inputProps没有value字段，加一个空的
      // @ts-ignore
      inputProps.value = ''
    }
    // 删除多余事件（不直接透传到input上）
    delete inputProps.autoFocus
    delete inputProps.autoSelect
    delete inputProps.onEnter
    delete inputProps.onEsc
    const cs = classNames({
      'wowui-input': 1,
      'input-has-error': errorText,
      'input-has-icon': iconType,
      'disabled': disabled,
    }, className)
    console.log(disabled, 'syp-disabled')
    return (
      <div className={cs} style={style}>
        {
          !!iconType &&
            <div className="input-icon-warp">
              {/*todo: Icon组件*/}
              {/*<Icon iconType={iconType}/>*/}
            </div>
        }
        <div>{filedName}：</div>
        <input ref={this.inputRef} type="text" {...inputProps}
               onChange={this.handleInputChange} onKeyDown={this.handleKeyDown}
               onCompositionStart={this.handleCompositionStart}
               onCompositionEnd={this.handleCompositionEnd} disabled={disabled}/>
        {
          !!errorText &&
            <div className="input-error-text">{errorText}</div>
        }
      </div>
    )
  }
}

export default FieldInput