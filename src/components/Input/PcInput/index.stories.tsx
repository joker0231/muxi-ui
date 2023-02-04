import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import PcInput from './index'

export default {
    title: 'Muxi-ui/Input/PcInput',
    component: PcInput,
    parameters: {
        docs: {
            description: {
                component: 'PFieldInput: PC端带有标题的输入框'
            }
        }
    }
} as ComponentMeta<typeof PcInput>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PcInput> = (args) => <PcInput {...args} />

const onKeydown = () => {
    console.log(123)
}

export const BaseUsage = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BaseUsage.args = {
    disabled: true,
    onChange: onKeydown,
    filedName: '测试字段'
}
