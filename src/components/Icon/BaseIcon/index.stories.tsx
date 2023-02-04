import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import BaseIcon from './index'

export default {
    title: 'Muxi-ui/Icon/BaseIcon',
    component: BaseIcon
} as ComponentMeta<typeof BaseIcon>

const Template: ComponentStory<typeof BaseIcon> = (args) => <BaseIcon {...args} />

const onKeydown = () => {
    console.log(123)
}

export const BaseUsage = Template.bind({})
BaseUsage.args = {
    disabled: true,
    onChange: onKeydown
}
