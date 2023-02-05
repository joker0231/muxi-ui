import React from 'react'
import { type BaseButtonProps } from '../interface'
import classNames from 'classnames'

const BaseButton: React.FC<BaseButtonProps> = (props: BaseButtonProps) => {
    const { style, onClick, disabled, className, type, triggered, label } = props
    const htmlType = props.htmlType
    const classes = classNames(
        'button',
        type,
        className,
        { 'btn-disable': disabled },
        { 'btn-triggered': triggered }
    )
    return (
        <>
            <button
                type={htmlType}
                className={classes}
                style={style}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}

export default BaseButton
