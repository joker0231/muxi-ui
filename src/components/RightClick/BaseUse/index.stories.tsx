import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import RightClick from './index'

export default {
    title: 'Muxi-ui/RightClick/BaseUse',
    component: RightClick
} as ComponentMeta<typeof RightClick>

const Template: ComponentStory<typeof RightClick> = (args) => <RightClick {...args} />

export const RightCard = Template.bind({})
RightCard.args = {
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
