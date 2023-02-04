interface CardProps {
    className?: string
    selectionList: [{name:string,click:()=>void}] //右键菜单选项列表 其中包括选项名称以及绑定的方法
}


export type {CardProps}
