import React, { useState, forwardRef, useImperativeHandle } from 'react'
import './index.less'
import useSyncCallback from '../../../helpers/hooks/useSyncCallback'

interface selectionItem {
    name: string
    major: string[]
}

interface SelectorPanelProps {
    collegeList: selectionItem[]
    getInfo: (value: string) => void
}

export interface PanelHandle {
    close: () => void
    open: () => void
}

// forwardRef + divRef
// forwardRef + useImperativeHandle  (类组件是privatie)

const SelectorPanel = forwardRef<PanelHandle, SelectorPanelProps>((props, ref) => {
    const { collegeList, getInfo } = props
    const [index, setIndex] = useState<number>(0)
    const [collage, setCollage] = useState<string>('')
    const [major, setMajor] = useState<string>('')
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
            setCollage(e.currentTarget.innerText)
            getValue()
        } else {
            setCollage(e.currentTarget.innerText)
            setMajor('')
            getValue()
        }
    }

    const getMajor: React.MouseEventHandler<HTMLLIElement> = (e) => {
        setMajor(e.currentTarget.innerHTML)
        getValue()
    }

    const getValue = useSyncCallback(() => {
        const value = collage + '/' + major
        getInfo(value)
    })

    return (
        <>
            {visible && (
                <div className="selector-box">
                    <ul className="selector-menu">
                        {collegeList.map((item) => {
                            return (
                                <li
                                    aria-hidden="true"
                                    key={collegeList.indexOf(item)}
                                    onClick={getCollage}
                                    tabIndex={collegeList.indexOf(item)}
                                >
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                    <ul className="selector-menu">
                        {collegeList[index].major.map((item, index) => {
                            return (
                                <li aria-hidden="true" onClick={getMajor} key={index}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </>
    )
})

SelectorPanel.displayName = 'SelectorPanel'

export default React.memo(SelectorPanel)
