import React, { useRef, useState, useEffect } from 'react'
import './index.less'
import SelectorPanel, { type PanelHandle } from '../SelectorPanel/index'
import SelectorInput from '../SelectorInput/index'

export interface majorItem {
    name: string
}
export interface collageItem {
    name: string
    major: majorItem[]
}
export interface ProfessionalSelectorProps {
    className?: string
    collegeList: collageItem[]
    onChange: (profession: string) => void
}

const ProfessionalSelector: React.FC<ProfessionalSelectorProps> = (props) => {
    const { collegeList, onChange } = props
    const input = useRef<HTMLDivElement>(null)
    const panel = useRef<PanelHandle>(null)
    const [collage, setCollage] = useState<string>('')
    const [major, setMajor] = useState<string>('')

    const onChangeCollage = (collage: string) => {
        setCollage(collage)
    }
    const onChangeMajor = (major: string) => {
        setMajor(major)
    }

    useEffect(() => {
        if (input.current && major && collage) {
            onChange(input.current.innerHTML)
        }
    }, [major, collage])

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (panel.current) {
                panel.current.close()
            }
        })
    }, [])

    const onClear = () => {
        setMajor('')
        setCollage('')
        if (panel.current) {
            panel.current.close()
        }
    }

    const stopPropagation = (e: any) => {
        e.nativeEvent.stopImmediatePropagation()
    }

    const show = () => {
        if (panel.current) {
            panel.current.open()
        }
    }

    return (
        <>
            <div className="professional-container" onClick={stopPropagation}>
                <SelectorInput
                    major={major}
                    collage={collage}
                    ref={input}
                    clear={onClear}
                    show={show}
                />
                <SelectorPanel
                    onChangeCollage={onChangeCollage}
                    onChangeMajor={onChangeMajor}
                    collage={collage}
                    collegeList={collegeList}
                    ref={panel}
                />
            </div>
        </>
    )
}

export default ProfessionalSelector
