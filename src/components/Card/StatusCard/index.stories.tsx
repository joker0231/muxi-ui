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
    username: '用户1',
    time: '2023年2月6日',
    content: '这是状态展示',
    commentcount: 2,
    liked: true,
    likecount: 2
}
