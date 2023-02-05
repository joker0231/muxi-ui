import React from 'react'
import './index.less'
import { type BasePanelProps, type footerProps } from '../interface'
import Button from '../../Button/BaseButton/index'
import { buttonType } from '../../Button/interface'
import classNames from 'classnames'

const DefaultFooter: React.FC<footerProps> = ({ okText, cancelText, onOk, onCancel }) => (
    <div className="modal-footer">
        <Button className="footer-ensure" onClick={onOk} label={okText} type={buttonType.basic} />
        <Button type={buttonType.basic} onClick={onCancel} label={cancelText} />
    </div>
)

const BasePanel: React.FC<BasePanelProps> = (props) => {
    let {
        className,
        closable,
        onClose,
        footer,
        onOk,
        onCancel,
        okText,
        cancelText,
        visible,
        title,
        children
    } = props
    const classes = classNames('modal-body', className)
    const closeBtn = closable ? (
        <button type="button" className="modal-close" onClick={onClose}>
            close
        </button>
    ) : null

    if (footer === undefined) {
        footer = (
            <DefaultFooter
                onOk={onOk}
                onCancel={onCancel}
                okText={okText}
                cancelText={cancelText}
            />
        )
    }
    let content
    if (visible) {
        content = (
            <div className="modal">
                <div className="modal-backdrop" />
                <div className={classes}>
                    <div className="modal-title">{title}</div>
                    {closeBtn}
                    <hr />
                    <div className="modal-content">{children}</div>
                    <hr />
                    {footer}
                </div>
            </div>
        )
    } else {
        content = null
    }
    return <>{content}</>
}

export default BasePanel
