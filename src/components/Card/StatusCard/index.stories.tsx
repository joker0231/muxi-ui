import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import StatusCard from './index'

export default {
    title: 'Muxi-ui/Card/StatusCard',
    component: StatusCard
} as ComponentMeta<typeof StatusCard>

const Template: ComponentStory<typeof StatusCard> = (args) => <StatusCard {...args} />

export const StatusUse = Template.bind({})
StatusUse.args = {
    selectionList: [
        {
            name: '关注',
            click: () => {
                console.log(1)
            }
        },
        {
            name: '点赞',
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
