import FolderIcon from '../../../assets/svg/fileIcon/folder.svg'
import PdfIcon from '../../../assets/svg/fileIcon/pdf.svg'
import PsdIcon from '../../../assets/svg/fileIcon/psd.svg'
import TxtIcon from '../../../assets/svg/fileIcon/txt.svg'
import ZipIcon from '../../../assets/svg/fileIcon/zip.svg'
import RarIcon from '../../../assets/svg/fileIcon/rar.svg'
import DefaultIcon from '../../../assets/svg/fileIcon/default.svg'

const FileIconMap = {
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

export declare type IconMapType = keyof typeof FileIconMap // 这个可以哈哈，我之前也尝试写过，有我的风范

function getFileCardIcon(iconType: IconMapType) {
    return FileIconMap[iconType]
}

function getNameIcon(name: string) {
    return name.substring(name.length - 3, name.length)
}

export { getFileCardIcon, getNameIcon }
