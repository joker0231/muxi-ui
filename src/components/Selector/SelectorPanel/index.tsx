import React, { useState, forwardRef, useImperativeHandle } from 'react'
import './index.less'

interface majorItem {
    name: string
}

interface collageItem {
    name: string
    major: majorItem[]
}

interface SelectorPanelProps {
    collegeList: collageItem[]
    collage: string
    onChangeCollage: (collage: string) => void
    onChangeMajor: (major: string) => void
}

export interface PanelHandle {
    close: () => void
    open: () => void
}

const SelectorPanel = forwardRef<PanelHandle, SelectorPanelProps>((props, ref) => {
    const { collegeList, collage, onChangeCollage, onChangeMajor } = props
    const [index, setIndex] = useState<number>(0)

    const [visible, setVisible] = useState<boolean>(false)

    useImperativeHandle(ref, () => {
        return {
            close: () => {
                setVisible(false)
                return ref
            },
            open: () => {
                setVisible(true)
                return ref
            }
        }
    })

    const getCollage: React.MouseEventHandler<HTMLLIElement> = (e) => {
        setIndex(e.currentTarget.tabIndex)
        if (!collage) {
            onChangeCollage(e.currentTarget.innerText)
        } else {
            onChangeCollage(e.currentTarget.innerText)
            onChangeMajor('')
        }
    }

    const getMajor: React.MouseEventHandler<HTMLLIElement> = (e) => {
        onChangeMajor(e.currentTarget.innerHTML)
    }

    const renderItem = (list: any[], onClick: React.MouseEventHandler<HTMLLIElement>) => {
        return list.map((item, index) => {
            return (
                <li aria-hidden="true" key={index} onClick={onClick}>
                    {item.name}
                </li>
            )
        })
    }

    return (
        <>
            {visible && (
                <div className="selector-box">
                    <ul className="selector-menu">{renderItem(collegeList, getCollage)}</ul>
                    <ul className="selector-menu">
                        {renderItem(collegeList[index] as any, getMajor)}
                    </ul>
                </div>
            )}
        </>
    )
})

SelectorPanel.displayName = 'SelectorPanel'

export default React.memo(SelectorPanel)
