import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import BaseMessage from './index'

export default {
    title: 'Muxi-ui/Message/BaseMessage',
    component: BaseMessage
} as ComponentMeta<typeof BaseMessage>

const Template: ComponentStory<typeof BaseMessage> = (args) => <BaseMessage {...args} />

export const BaseUsage = Template.bind({})
BaseUsage.args = {
    children: <span>操作成功</span>
}
