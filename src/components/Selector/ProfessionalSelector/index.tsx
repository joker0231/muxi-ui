import React,{useRef,useState,useEffect} from 'react'
import './index.less'
import SelectorPanel from '../SelectorPanel/index'
import SelectorInput from '../SelectorInput/index'
import { type ProfessionalSelectorProps } from '../interface'

const ProfessionalSelector: React.FC<ProfessionalSelectorProps> = (props) => {
    const { collegeList } = props
    const input = useRef()
    const panel = useRef()
    const [closable,setClosable] = useState<boolean>(false)

    useEffect(()=> {
        document.addEventListener("click", (e) => {
            if(panel.current){
                const obj: HTMLDivElement = panel.current
                obj.style.display = "none"
            }
        });
    },[])

    const getInfo = (value:string) => {
        if(input.current){
            const obj: HTMLDivElement = input.current
            obj.innerHTML = value
        }
        setClosable(true)
    }

    const clear = () => {
        if(input.current){
            const obj: HTMLDivElement = input.current
            obj.innerHTML = ''
        }
        if(panel.current){
            const obj: HTMLDivElement = panel.current
            obj.style.display = "none"
        }
        setClosable(false)
    }

    const stopPropagation = (e:any) => {
        e.nativeEvent.stopImmediatePropagation();
    }

    const show = () => {
        if(panel.current){
            const obj: HTMLDivElement = panel.current
            obj.style.display = "flex"
        }
    }

    return (
        <>
            <div className="professional-container" onClick={stopPropagation}>
                <SelectorInput closable={closable} ref={input} clear={clear} show={show}/>
                <SelectorPanel collegeList={collegeList} ref={panel} getInfo={getInfo}/>
            </div>
        </>
    )
}

export default ProfessionalSelector
