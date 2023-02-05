interface BasePanelProps {
    className?: string
    visible: boolean
    closable?: boolean
    onClose?: () => void
    title?: string
    okText?: string
    cancelText?: string
    onOk?: () => void
    onCancel?: () => void
    footer?: React.ReactNode
    children?: React.ReactNode
}

interface footerProps {
    okText?: string
    cancelText?: string
    onOk?: () => void
    onCancel?: () => void
}

export type { BasePanelProps, footerProps }
