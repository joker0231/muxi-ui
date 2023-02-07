import React from 'react'
import FolderIcon from '../../../assets/svg/fileIcon/folder.svg'
import PdfIcon from '../../../assets/svg/fileIcon/pdf.svg'
import PsdIcon from '../../../assets/svg/fileIcon/psd.svg'
import TxtIcon from '../../../assets/svg/fileIcon/txt.svg'
import ZipIcon from '../../../assets/svg/fileIcon/zip.svg'
import RarIcon from '../../../assets/svg/fileIcon/rar.svg'
import DefaultIcon from '../../../assets/svg/fileIcon/default.svg'
import './index.less'
import { type FileCardProps } from '../interface'
import RightClick from '../../RightClick/BaseUse/index'

const IconMap = {
    folder: FolderIcon,
    pdf: PdfIcon,
    PDF: PdfIcon,
    psd: PsdIcon,
    zip: ZipIcon,
    rar: RarIcon,
    PSD: PsdIcon,
    txt: TxtIcon,
    TXT: TxtIcon,
    ZIP: ZipIcon,
    RAR: RarIcon,
    default: DefaultIcon
}

declare type iconmaptype = keyof typeof IconMap

const FileItem: React.FC<FileCardProps> = (props) => {
    const { type, name } = props

    const icon = name.substring(name.length - 3, name.length)

    return (
        <>
            <div className="fileicon">
                {type ? (
                    <>
                        <img src={FolderIcon} alt="" />
                        <div className="file-titletext">{name}</div>
                    </>
                ) : (
                    <>
                        <img src={IconMap[icon as iconmaptype] || DefaultIcon} alt="" />
                        <div className="file-titletext">{name}</div>
                    </>
                )}
            </div>
            <RightClick
                selectionList={[
                    {
                        name: '关注',
                        click: () => {
                            console.log(1)
                        }
                    },
                    {
                        name: '删除',
                        click: () => {
                            console.log(3)
                        }
                    },
                    {
                        name: '移动',
                        click: () => {
                            console.log(3)
                        }
                    }
                ]}
            />
        </>
    )
}

export default FileItem
