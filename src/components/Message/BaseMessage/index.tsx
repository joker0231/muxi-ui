import React from 'react'
import './index.less'
import classNames from 'classnames'

export enum MessageType {
    Success = 'Success',
    Warning = 'Warning',
    Danger = 'Danger'
}

export interface BaseMessageProps {
    type: MessageType
    text?: string
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

const BaseMessage: React.FC<BaseMessageProps> = (props) => {
    const { style, children, type = MessageType.Success, className, text } = props
    const cs = classNames('message', `${type.toLowerCase()}`, className)

    return (
        <>
            <div role="alert" className={cs} style={style}>
                <span>{text}</span>
                {children}
            </div>
        </>
    )
}

export default React.memo(BaseMessage)
