import React, { useMemo } from 'react'
import './index.less'
import RightClick from '../../RightClick'
import { getFileCardIcon, getNameIcon, type IconMapType } from './helper'

interface FileCardProps {
    type?: boolean
    name: string
}

const FileItem: React.FC<FileCardProps> = (props) => {
    const { type, name } = props

    const icon = useMemo(() => {
        return getNameIcon(name)
    }, [name]) as IconMapType // 感觉和这个断言有问题，name是字符串，传任意字符串瞎写，不一定能截取到要用的icon，ts就是要约束大家的规范，让大家不看你的组件代码怎么写的就知道怎么用，name感觉可以优化

    const FolderIcon = useMemo(() => {
        return getFileCardIcon('folder')
    }, [])
    const DefaultIcon = useMemo(() => {
        return getFileCardIcon('default')
    }, [])

    return (
        <>
            <div className="file-card">
                {type ? (
                    <>
                        <img src={FolderIcon} alt="" />
                        <div className="file-card-title">{name}</div>
                    </>
                ) : (
                    <>
                        <img src={getFileCardIcon(icon) || DefaultIcon} alt="" />
                        <div className="file-card-title">{name}</div>
                    </>
                )}
            </div>
            <RightClick
                options={[
                    {
                        name: '关注',
                        clickHandler: () => {
                            console.log(1)
                        }
                    },
                    {
                        name: '删除',
                        clickHandler: () => {
                            console.log(3)
                        }
                    },
                    {
                        name: '移动',
                        clickHandler: () => {
                            console.log(3)
                        }
                    }
                ]}
            />
        </>
    )
}

export default FileItem
