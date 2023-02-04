import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import Index from './index'

export default {
    title: 'Muxi-ui/Input/BaseInput',
    component: Index,
    parameters: {
        docs: {
            description: {
                component: '原子'
            }
        }
    }
} as ComponentMeta<typeof Index>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />

const onKeydown = () => {
    console.log(123)
}

export const BaseUsage = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BaseUsage.args = {
    disabled: true,
    onChange: onKeydown
}
