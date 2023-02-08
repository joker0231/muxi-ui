export enum MessageType {
    Success = 'success',
    Warning = 'warning',
    Danger = 'danger'
}

interface BaseMessageProps {
    type: MessageType
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

export type { BaseMessageProps }
