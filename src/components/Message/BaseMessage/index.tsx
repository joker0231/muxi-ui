import React from 'react'
import './index.less'
import classNames from 'classnames'
import { type BaseMessageProps } from '../interface'

const BaseMessage: React.FC<BaseMessageProps> = (props) => {
    const { style, children, type = 'success', className } = props
    const classes = classNames('alert', `alert-${type}`, className)

    return (
        <>
            <div role="alert" className={classes} style={style}>
                {children}
            </div>
        </>
    )
}

export default BaseMessage
