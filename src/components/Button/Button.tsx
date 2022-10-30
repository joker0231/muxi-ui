import React from 'react'
import './Button.less'

export interface ButtonProps {
    label: string
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => <button>{props.label}lll</button>

export default Button
