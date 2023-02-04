import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import MobileInput from './index'

export default {
    title: 'Muxi-ui/Input/MobileInput',
    component: MobileInput,
    parameters: {
        docs: {
            description: {
                component: 'PFieldInput: PC端带有标题的输入框'
            }
        }
    }
} as ComponentMeta<typeof MobileInput>

const Template: ComponentStory<typeof MobileInput> = (args) => <MobileInput {...args} />

const onKeydown = () => {
    console.log(123)
}

export const BaseUsage = Template.bind({})
BaseUsage.args = {
    disabled: true,
    onChange: onKeydown,
    filedName: '测试字段'
}
