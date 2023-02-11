import React, { useRef, useState, useEffect } from 'react'
import './index.less'
import SelectorPanel, { type PanelHandle } from '../SelectorPanel/index'
import SelectorInput from '../SelectorInput/index'
import { type ProfessionalSelectorProps } from '../interface'

const ProfessionalSelector: React.FC<ProfessionalSelectorProps> = (props) => {
    const { collegeList } = props
    const input = useRef<HTMLDivElement>(null)
    const panel = useRef<PanelHandle>(null)
    const [closable, setClosable] = useState<boolean>(false)

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (panel.current) {
                // panel.current.style.display = 'none'
                panel.current.close()
            }
        })
    }, [])

    const getInfo = (value: string) => {
        if (input.current) {
            input.current.innerHTML = value
        }
        setClosable(true)
    }

    const clear = () => {
        if (input.current) {
            input.current.innerHTML = ''
        }
        if (panel.current) {
            panel.current.close()
        }
        setClosable(false)
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
                <SelectorInput closable={closable} ref={input} clear={clear} show={show} />
                <SelectorPanel collegeList={collegeList} ref={panel} getInfo={getInfo} />
            </div>
        </>
    )
}

export default ProfessionalSelector
