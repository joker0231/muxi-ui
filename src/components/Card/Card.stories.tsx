import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import Card from './Card'

export default {
    title: 'Muxi-ui/Card',
    component: Card
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

const onKeydown = () => {
    console.log(123)
}

export const RightCard = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RightCard.args = {
    selectionList: [{
        name: "关注",
        click: ()=>{console.log(1)}
    },{
        name: "点赞",
        click: ()=>{console.log(2)}
    },{
        name: "删除",
        click: ()=>{console.log(3)}
    }]
}
