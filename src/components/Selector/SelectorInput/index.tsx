import React from 'react'
import './index.less'

interface SelectorInputProps {
    value?: string
    closable?: boolean
    clear: () => void
    show: () => void
}

const SelectorInput = React.forwardRef<HTMLDivElement, SelectorInputProps>((props, ref) => {
    const { closable, clear, show } = props
    const closeBtn = closable ? (
        <button
            type="button"
            className="modal-close"
            onClick={(e) => {
                e.stopPropagation()
                clear()
            }}
        >
            close
        </button>
    ) : null
    return (
        <>
            <div className="input-container" onClick={show}>
                <div className="selector-input" ref={ref} />
                {closeBtn}
            </div>
        </>
    )
})

SelectorInput.displayName = 'SelectorInput'

export default SelectorInput
