import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import FileCard from './index'

export default {
    title: 'Muxi-ui/Card/FileCard',
    component: FileCard
} as ComponentMeta<typeof FileCard>

const Template: ComponentStory<typeof FileCard> = (args) => <FileCard {...args} />

export const FileUse = Template.bind({})
FileUse.args = {
    selectionList: [
        {
            name: '移动',
            click: () => {
                console.log(1)
            }
        },
        {
            name: '关注',
            click: () => {
                console.log(2)
            }
        },
        {
            name: '删除',
            click: () => {
                console.log(3)
            }
        }
    ]
}
