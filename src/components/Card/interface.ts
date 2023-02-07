interface FileCardProps {
    type?: boolean
    name: string
}

export enum feedType {
    like = 'like',
    comment = 'comment'
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
