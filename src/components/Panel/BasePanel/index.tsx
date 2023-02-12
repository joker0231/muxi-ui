import React from 'react'
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
    const {
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

    const renderFooter = React.useCallback(() => {
        if (footer === undefined) {
            return (
                <DefaultFooter
                    onOk={onOk}
                    onCancel={onCancel}
                    okText={okText}
                    cancelText={cancelText}
                />
            )
        }
        return footer
    }, [footer])

    return (
        <>
            {visible && (
                <div className="modal">
                    <div className="modal-backdrop" />
                    <div className={classes}>
                        <div className="modal-title">{title}</div>
                        {closable && (
                            <button type="button" className="modal-close" onClick={onClose}>
                                close
                            </button>
                        )}
                        <div className="modal-content">{children}</div>
                        {renderFooter()}
                    </div>
                </div>
            )}
        </>
    )
}

export default React.memo(BasePanel)
