import React,{ useEffect, useState } from 'react'
import './index.less'
import { type DropdownProps} from './interface'

const Dropdown: React.FC<DropdownProps> = (props) => {
    const {selectionList} = props
    return (
        <>
            <div className="drop-box">
                <p className="txt">{selectionList[0].name}</p>
                <ul className="menu">
                    {selectionList.map((item) => {
                        return (
                            <li
                                aria-hidden="true"
                                key={selectionList.indexOf(item)}
                                onClick={item.click}
                            >
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Dropdown
