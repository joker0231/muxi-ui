import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import BaseCard from './index'

export default {
    title: 'Muxi-ui/Card/BaseCard',
    component: BaseCard
} as ComponentMeta<typeof BaseCard>

const Template: ComponentStory<typeof BaseCard> = (args) => <BaseCard {...args} />

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
