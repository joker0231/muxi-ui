import './index.less'
import React, { useCallback } from 'react'
import useRightClick from '../../../helpers/hooks/useRightClick'

interface OptionItem {
    name: string
    clickHandler: () => void
}
interface CardProps {
    className?: string
    options: OptionItem[]
}

const RightClick: React.FC<CardProps> = (props) => {
    const { options } = props
    const { x, y, visible } = useRightClick()

    const renderOptions = useCallback(() => {
        return (
            <>
                {options.map((option, index) => {
                    const { name, clickHandler } = option
                    return (
                        <div key={String(index) + 'card'} onClick={clickHandler}>
                            {name}
                        </div>
                    )
                })}
            </>
        )
    }, [options])

    return (
        <React.Fragment>
            {visible ? (
                <div
                    className="click-card"
                    style={{
                        left: x,
                        top: y
                    }}
                >
                    {renderOptions()}
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default RightClick
