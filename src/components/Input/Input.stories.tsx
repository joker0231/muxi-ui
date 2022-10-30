import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from './Input'

export default {
  title: 'Muxi-ui/Input',
  component: Input
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

const onKeydown = () => {
  console.log(123)
}

export const BaseInput = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BaseInput.args = {
  disabled: true,
  onChange: onKeydown
}
