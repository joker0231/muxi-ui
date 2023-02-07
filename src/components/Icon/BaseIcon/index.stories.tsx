import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import BaseIcon from './index'
import Thumbs from '../../../assets/svg/commonIcon/thumbs.svg'

export default {
    title: 'Muxi-ui/Icon/BaseIcon',
    component: BaseIcon
} as ComponentMeta<typeof BaseIcon>

const Template: ComponentStory<typeof BaseIcon> = (args) => <BaseIcon {...args} />

export const BaseUsage = Template.bind({})
BaseUsage.args = {
    width: 22,
    height: 22,
    src: Thumbs
}
