import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import FieldInput from './FieldInput'

export default {
    title: 'Muxi-ui/Input',
    component: FieldInput
} as ComponentMeta<typeof FieldInput>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FieldInput> = (args) => <FieldInput {...args} />

const onKeydown = () => {
    console.log(123)
}

export const FieldInput1 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FieldInput1.args = {
    disabled: true,
    onChange: onKeydown,
    filedName: '测试字段'
}
