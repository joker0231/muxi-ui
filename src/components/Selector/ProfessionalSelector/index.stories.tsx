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
    onChange: (value) => {
        alert(value)
    },
    collegeList: [
        {
            name: '信息管理学院',
            major: [
                {
                    name: '大数据'
                },
                {
                    name: '11'
                }
            ]
        },
        {
            name: '信息管理学院',
            major: [
                {
                    name: '大数据'
                },
                {
                    name: '1'
                }
            ]
        },
        {
            name: '信息管理学院',
            major: [
                {
                    name: '大数据'
                },
                {
                    name: '电子商务'
                }
            ]
        },
        {
            name: '信息管理学院',
            major: [
                {
                    name: '大数据'
                },
                {
                    name: '11'
                }
            ]
        },
        {
            name: '信息管理学院',
            major: [
                {
                    name: '大数据'
                },
                {
                    name: '11'
                }
            ]
        },
        {
            name: '信息管理学院',
            major: [
                {
                    name: '大数据'
                },
                {
                    name: '11'
                }
            ]
        },
        {
            name: '信息管理学院',
            major: [
                {
                    name: '大数据'
                },
                {
                    name: '11'
                }
            ]
        }
    ]
}
