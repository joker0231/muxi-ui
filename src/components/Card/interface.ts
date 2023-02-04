interface selectionItem {
    name: string
    click: () => void
}
interface CardProps {
    className?: string
    selectionList: selectionItem[] // 右键菜单选项列表 其中包括选项名称以及绑定的方法
}

export type { CardProps }
