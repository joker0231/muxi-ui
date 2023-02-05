import React from 'react'
import './index.less'
import { type ProfessionalSelectorProps } from '../interface'

const ProfessionalSelector: React.FC<ProfessionalSelectorProps> = (props) => {
    const { selectionList } = props
    // todo 基本已成型，可以优化下，然后抽象出场景的 1. 日期选择器 2. 单选多选选择器 3. 专业选择器
    // todo BaseDrop是原子层 ，             日期选择器是分子层，         最后包含Input框，能够选择内容并包含删除内容功能的是有机体
    // todo （之前storybook有考虑过 atom-Molecules-Origanisms 分层，但是很乱，是现在的按组件类型分，一个组件下有原子组件和分子组件，然后再分有机体组件（或者有机体组件单独分出来））
    // https://medium.com/@darmau/what-is-atomic-design-3d40bcbde981
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

export default ProfessionalSelector
