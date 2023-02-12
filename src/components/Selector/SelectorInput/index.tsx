import React from 'react'
import './index.less'

interface SelectorInputProps {
    value?: string
    clear: () => void
    show: () => void
    major: string
    collage: string
}

const SelectorInput = React.forwardRef<HTMLDivElement, SelectorInputProps>((props, ref) => {
    const { clear, show, major, collage } = props

    const closable = major !== '' || collage !== ''
    const text = collage + (closable ? '/' : '') + major

    return (
        <>
            <div className="input-container" onClick={show}>
                <div className="selector-input" ref={ref}>
                    {text}
                </div>
                {closable && (
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
                )}
            </div>
        </>
    )
})

SelectorInput.displayName = 'SelectorInput'

export default SelectorInput
