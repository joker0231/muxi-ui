import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import BasePanel from './index'

export default {
    title: 'Muxi-ui/Panel/BasePanel',
    component: BasePanel
} as ComponentMeta<typeof BasePanel>

const Template: ComponentStory<typeof BasePanel> = (args) => <BasePanel {...args} />

export const BaseUsage = Template.bind({})
BaseUsage.args = {
    visible: true,
    okText: '确定',
    cancelText: '取消',
    title: '提示',
    children: <span>请问是否关闭本窗口</span>,
    closable: true
}
