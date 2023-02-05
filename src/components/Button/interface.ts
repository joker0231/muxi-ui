export enum ButtonType {
    primary = 'btn-primary', // 常见蓝底白字按钮 因为用的较多 定为default样式
    basic = 'btn-basic', // modal用的 灰底按钮 黑border按钮
    trigger = 'btn-trigger',
    // '成员'页面 用的 点击与否 导致样式有变 需要一个state 搭配 triggered属性
    anim = 'btn-anim' // 有动态按下效果
}

export enum HtmlBtnType {
    button = 'button',
    submit = 'submit',
    reset = 'reset'
}

interface BaseButtonProps {
    type: ButtonType
    htmlType?: HtmlBtnType
    style?: React.CSSProperties
    onClick?: () => void
    disabled?: boolean
    className?: string
    triggered?: boolean
    label?: string
}

export type { BaseButtonProps }
