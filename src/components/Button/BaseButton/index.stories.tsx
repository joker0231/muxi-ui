import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import Index from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Muxi-ui/Button/BaseButton',
    component: Index
} as ComponentMeta<typeof Index>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    label: 'Hello world!'
}

export const ClickMe = Template.bind({})
ClickMe.args = {
    label: 'Click me!'
}
