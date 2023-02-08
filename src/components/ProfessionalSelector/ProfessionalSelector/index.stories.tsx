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
BaseUsage.args = {}
