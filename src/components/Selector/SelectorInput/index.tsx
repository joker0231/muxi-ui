import React, {LegacyRef, MutableRefObject, Ref,useState,useEffect } from 'react'
import './index.less'

interface SelectorInputProps {
    value?: string
    closable?: boolean
    clear: ()=>void
    show: ()=> void
}

const SelectorInput = React.forwardRef<Ref<MutableRefObject<undefined>> | undefined,SelectorInputProps>((props,ref) => {
    const { value,closable,clear,show } = props
    const closeBtn = closable ? (
        <button type="button" className="modal-close" onClick={(e)=>{e.stopPropagation();clear()}}>
            close
        </button>
    ) : null
    return (
        <>
            <div className="input-container" onClick={show}>
                <div className="selector-input" ref={ref as LegacyRef<HTMLDivElement> | undefined}/>
                {closeBtn}
            </div>
        </>
    )
})

export default SelectorInput
