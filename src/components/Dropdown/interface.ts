interface DropdownProps {
    className?: string
    clickItem: {name:string,click:()=>void}
    selectionList: Array<object> //下拉菜单选项列表 其中包括选项名称以及绑定的方法
}


export type {DropdownProps}
