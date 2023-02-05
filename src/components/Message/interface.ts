export enum MessageType {
    success = 'success',
    warning = 'warning',
    danger = 'danger'
}

interface BaseMessageProps {
    type: MessageType
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

export type { BaseMessageProps }
