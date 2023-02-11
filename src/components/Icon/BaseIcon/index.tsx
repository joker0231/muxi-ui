import React from 'react'
import './index.less'
import { type BaseIconProps } from '../interface'

const BaseIcon: React.FC<BaseIconProps> = (props) => {
    const { src, width, height, className } = props
    return (
        <>
            <img src={src} className={className} width={width} height={height} />
        </>
    )
}

export default BaseIcon
