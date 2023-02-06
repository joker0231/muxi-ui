import React, { useMemo } from 'react'
import './index.less'
import { type BasePanelProps, type footerProps } from '../interface'
import Button from '../../Button/BaseButton/index'
import { ButtonType } from '../../Button/interface'
import classNames from 'classnames'

const DefaultFooter: React.FC<footerProps> = ({ okText, cancelText, onOk, onCancel }) => (
    <div className="modal-footer">
        <Button className="footer-ensure" onClick={onOk} label={okText} type={ButtonType.basic} />
        <Button type={ButtonType.basic} onClick={onCancel} label={cancelText} />
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
    const content = useMemo(() => {
        if (visible) {
            return (
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
            return null
        }
    }, [classes, title, closeBtn, children, footer])

    return <>{content}</>
}

export default React.memo(BasePanel)
