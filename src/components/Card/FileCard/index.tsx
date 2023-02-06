import React from 'react'
import { type CardProps } from '../interface'
import useRightClick from '../../../helpers/hooks/useRightClick'

export const ClickContent = () => {
    return (
        <div>
            <div>123</div>
            <div>456</div>
            <div>678</div>
        </div>
    )
}

const Index: React.FC<CardProps> = (props) => {
    const { selectionList } = props
    const { x, y, visible } = useRightClick()
    // TODO 这个卡片已经成型了，基本原则就是，提供外界宽高和内容传入，有规范的padding等规范，然有右键弹窗功能，弹窗内容需要外界传入，可以有以下场景，然后基于Base组件拆出来其他Card就行
    // 1. 进度的别人发的进度，进度卡片，右键收藏点赞转发等操作
    // 2. 项目文件的卡片，右键移动，重命名，删除等操作

    // todo 感觉右键的内容也可以封装成组件，用统一的定义，例如上方的ClickContent组件，然后export给别人，在外面进度，项目场景的时候就可以规范定义，但是不会在storybook或者rollup打包出去
    return (
        <React.Fragment>
            <div
                style={{
                    position: 'relative',
                    height: '300px',
                    width: '300px',
                    backgroundColor: 'lightcyan'
                }}
            >
                这里是卡片本体
            </div>
            {visible ? (
                <div
                    className="menu"
                    style={{
                        position: 'fixed',
                        left: x,
                        top: y,
                        zIndex: 100,
                        backgroundColor: '#d7f0ff',
                        borderRadius: 5,
                        padding: 10
                    }}
                >
                    {selectionList.map((item, index) => {
                        return (
                            <div key={String(index) + 'card'} onClick={item.click}>
                                {item.name}
                            </div>
                        )
                    })}
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default Index
