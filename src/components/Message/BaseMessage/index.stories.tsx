import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import BaseMessage, { MessageType } from './index'

export default {
    title: 'Muxi-ui/Message/BaseMessage',
    component: BaseMessage
} as ComponentMeta<typeof BaseMessage>

const Template: ComponentStory<typeof BaseMessage> = (args) => <BaseMessage {...args} />

export const Success = Template.bind({})
Success.args = {
    text: 'Success',
    type: MessageType.Success
}

export const Warning = Template.bind({}) // bind方法是绑定this作用域对吧，可能对于演示有特殊作用，基本应该用不到，要看文档
Warning.args = {
    text: 'Warning',
    type: MessageType.Warning
}

export const Danger = Template.bind({})
Danger.args = {
    text: 'Danger',
    type: MessageType.Danger
}
