import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import FileCard from './index'

export default {
    title: 'Muxi-ui/Card/FileCard',
    component: FileCard
} as ComponentMeta<typeof FileCard>

const Template: ComponentStory<typeof FileCard> = (args) => <FileCard {...args} />

export const FileUse = Template.bind({})
FileUse.args = {
    name: '文件夹',
    proid: 4,
    fileid: 4,
    folderid: 4,
    type: true
}
