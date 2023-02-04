import React,{ useEffect, useState } from 'react'
import './index.less'
import { type CardProps } from './interface'

const Card: React.FC<CardProps> = (props) => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [visible, setVisible] = useState(false)
    const {selectionList,clickItem} = props
    useEffect(() => {
        console.log("RightClick")
        function rightClick(event: MouseEvent) {
            event.preventDefault()
            setX(event.x)
            setY(event.y)
            setVisible(true)
        }
        function leftClick(event: MouseEvent){
            setVisible(false)
        }
        window.addEventListener("contextmenu", rightClick)
        window.addEventListener("mousedown", leftClick)
        return () => {
            window.removeEventListener("mousedown", rightClick)
            window.removeEventListener("contextmenu", leftClick)
        }
    },[])
    return (
        <>
            {visible ?
                <div className="menu" style={{
                    position: 'fixed',
                    left: x,
                    top: y,
                    zIndex: 100,
                    backgroundColor: '#656267',
                    color: '#fff',
                    borderRadius: 5,
                    padding: 10,
                }}>
                    {selectionList.map((item)=>{
                        return (
                            <div onClick={item.click}>{item.name}</div>
                        )
                    })}
                </div> : null}
        </>
    )
}

export default Card
