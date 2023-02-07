import React from 'react'
import { ReactSVG } from 'react-svg'
import './index.less'
import { type BaseIconProps } from '../interface'

const BaseIcon: React.FC<BaseIconProps> = (props) => {
    const { src, width, height, classname } = props
    return (
        <>
            <ReactSVG src={src} className={classname} width={width} height={height} />
        </>
    )
}

export default BaseIcon
