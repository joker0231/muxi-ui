import React,{useRef} from 'react'
import './index.less'
import SelectorPanel from '../SelectorPanel/index'
import SelectorInput from '../SelectorInput/index'
import { type ProfessionalSelectorProps } from '../interface'

const ProfessionalSelector: React.FC<ProfessionalSelectorProps> = (props) => {
    const { collegeList } = props
    const input = useRef()
    const panel = useRef()

    const getInfo = (value:string) => {
        if(input.current){
            // @ts-ignore
            input.current.innerHTML = value
        }
    }

    const clear = () => {
        if(input.current){
            // @ts-ignore
            input.current.innerHTML = ''
        }
        if(panel.current){
            // @ts-ignore
            panel.current.style.display = "none"
        }
    }

    const show = () => {
        console.log(111)
        // if(panel.current){
        //     // @ts-ignore
        //     panel.current.style.display = "flex"
        // }
    }

    return (
        <>
            <div className="professional-container">
                <SelectorInput closable={true} ref={input} clear={clear} show={show}/>
                <SelectorPanel collegeList={collegeList} ref={panel} getInfo={getInfo}/>
            </div>
        </>
    )
}

export default ProfessionalSelector
