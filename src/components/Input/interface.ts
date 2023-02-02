interface IBaseInputProps {
    // 基础Input的props
    className?: string
    iconType?: string // 输入框左侧图标
    errorText?: string // 错误提示信息
    autoFocus?: boolean // 是否自动聚焦
    autoSelect?: boolean // 是否自动选中
    style?: object // 支持输入框容器自定义样式
    maxLength?: number // 默认1024，防止恶意输入大量字符
    disabled?: boolean
    onChange?: (value: string, isChineseInputting: boolean) => void

    onEnter?: () => void
    onEsc?: () => void

    [name: string]: any // 其余头传给input元素的参数
}

type IFieldInputProps = IBaseInputProps & {
    filedName: string // 字段名称
}

export type { IBaseInputProps, IFieldInputProps }
