import React from 'react'

export interface ButtonProps {
    label: string
}

const BaseButton: React.FC<ButtonProps> = (props: ButtonProps) => <button>{props.label}llll</button>

export default BaseButton
