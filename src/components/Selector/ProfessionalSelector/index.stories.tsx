import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import ProfessionalSelector from './index'

export default {
    title: 'Muxi-ui/ProfessionalSelector/BaseUse',
    component: ProfessionalSelector
} as ComponentMeta<typeof ProfessionalSelector>

const Template: ComponentStory<typeof ProfessionalSelector> = (args) => (
    <ProfessionalSelector {...args} />
)

export const BaseUsage = Template.bind({})
BaseUsage.args = {
    collegeList: [
        {
            name:'信息管理学院',
            major: ['大数据','电子商务']
        },{
            name:'信息管理学院',
            major: ['1','电子商务']
        },{
            name:'信息管理学院',
            major: ['大数据','2']
        },{
            name:'信息管理学院',
            major: ['3','电子商务']
        },{
            name:'信息管理学院',
            major: ['3','电子商务']
        },{
            name:'信息管理学院',
            major: ['3','电子商务']
        },{
            name:'信息管理学院',
            major: ['3','电子商务']
        }
    ]
}
