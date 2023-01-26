import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import Icon from './Icon'

export default {
    title: 'Muxi-ui/Icon',
    component: Icon
} as ComponentMeta<typeof Icon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

const onKeydown = () => {
    console.log(123)
}

export const BaseInput = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BaseInput.args = {
    disabled: true,
    onChange: onKeydown
}
