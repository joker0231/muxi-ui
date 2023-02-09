interface selectionItem {
    name: string
    major: string[]
}
interface ProfessionalSelectorProps {
    className?: string
    collegeList: selectionItem[]
}

export type { ProfessionalSelectorProps }
