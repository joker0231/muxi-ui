interface FileCardProps {
    type?: boolean
    name: string
}

interface StatusCardrops {
    id?: number
    avatar?: string
    username?: string
    time?: string
    onKeyPress?: () => void
    onClick?: () => void
    content: string
    commentcount?: number
    liked?: boolean
    likecount?: number
    chooseLike?: () => void
    clickToDetail?: () => void
    clickToComment?: () => void
}

export type { FileCardProps, StatusCardrops }
