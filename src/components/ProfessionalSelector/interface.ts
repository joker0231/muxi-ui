interface selectionItem {
    name: string
    click: () => void
}
interface ProfessionalSelectorProps {
    className?: string
    selectionList: selectionItem[] // 下拉菜单选项列表 其中包括选项名称以及绑定的方法
}

export type { ProfessionalSelectorProps }
