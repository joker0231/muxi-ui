import React,{LegacyRef, MutableRefObject, Ref, useState} from 'react'
import './index.less'
import useSyncCallback from '../../../helpers/hooks/useSyncCallback'
import classNames from 'classnames'

interface selectionItem {
    name: string
    major: string[]
}

interface SelectorPanelProps {
    collegeList:selectionItem[]
    getInfo: (value:string) => void
}

const SelectorPanel = React.forwardRef<Ref<MutableRefObject<undefined>> | undefined,SelectorPanelProps>((props,ref) => {
    const {collegeList,getInfo} = props
    const [index, setindex] = useState<number>(0)
    const [collage, setCollage] = useState<string>('')
    const [major, setMajor] = useState<string>('')
    const getCollage:React.MouseEventHandler<HTMLLIElement> = (e) => {
        // @ts-ignore
        setindex(e.target.tabIndex)
        if(!collage){
            // @ts-ignore
            setCollage(e.target.innerText)
            getvalue()
        }else {
            // @ts-ignore
            setCollage(e.target.innerText)
            setMajor('')
            getvalue()
        }

    }

    const getMajor:React.MouseEventHandler<HTMLLIElement> = (e) => {
        // @ts-ignore
        setMajor(e.target.innerText)
        getvalue()
    }

    const getvalue = useSyncCallback(() => {
        const value = collage + '/' + major
        getInfo(value)
    })

    return (
        <>
            <div className="selector-box" ref={ref as LegacyRef<HTMLDivElement> | undefined}>
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
                    {collegeList[index].major.map((item) => {
                        return (
                            <li
                                aria-hidden="true"
                                onClick={getMajor}
                            >
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
})

export default React.memo(SelectorPanel)
