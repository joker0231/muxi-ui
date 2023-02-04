interface CardProps {
    className?: string
    clickItem: {name:string,click:()=>void}
    selectionList: Array<object> //右键菜单选项列表 其中包括选项名称以及绑定的方法
}


export type {CardProps}
