import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import ProfessionalSelector from './index'

export default {
    title: 'Muxi-ui/Dropdown/BaseDropdown',
    component: ProfessionalSelector
} as ComponentMeta<typeof ProfessionalSelector>

const Template: ComponentStory<typeof ProfessionalSelector> = (args) => (
    <ProfessionalSelector {...args} />
)

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
