import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import BaseDropdown from './index'

export default {
    title: 'Muxi-ui/Dropdown/BaseDropdown',
    component: BaseDropdown
} as ComponentMeta<typeof BaseDropdown>

const Template: ComponentStory<typeof BaseDropdown> = (args) => <BaseDropdown {...args} />

const selectionList = [
    {
        name: '新建文件',
        click: () => {
            console.log(1)
        }
    },
    {
        name: '新建文档',
        click: () => {
            console.log(2)
        }
    },
    {
        name: '新建文件夹',
        click: () => {
            console.log(3)
        }
    }
]
export const BaseUsage = Template.bind({})
BaseUsage.args = {
    selectionList
}
