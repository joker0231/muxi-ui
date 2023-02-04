import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import Dropdown from './Dropdown'

export default {
    title: 'Muxi-ui/Dropdown',
    component: Dropdown
} as ComponentMeta<typeof Dropdown>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

const onKeydown = () => {
    console.log(123)
}

export const Dropdown1 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dropdown1.args = {
    selectionList: [{
        name: "新建文件",
        click: ()=>{console.log(1)}
    },{
        name: "新建文档",
        click: ()=>{console.log(2)}
    },{
        name: "新建文件夹",
        click: ()=>{console.log(3)}
    }]
}
