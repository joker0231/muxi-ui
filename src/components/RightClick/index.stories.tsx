import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import RightClick from './index'

export default {
    title: 'Muxi-ui/RightClick',
    component: RightClick
} as ComponentMeta<typeof RightClick>

const Template: ComponentStory<typeof RightClick> = (args) => <RightClick {...args} />

export const BaseUsage = Template.bind({})
BaseUsage.args = {
    options: [
        {
            name: '关注',
            clickHandler: () => {
                console.log(1)
            }
        },
        {
            name: '点赞',
            clickHandler: () => {
                console.log(2)
            }
        },
        {
            name: '删除',
            clickHandler: () => {
                console.log(3)
            }
        }
    ]
}
