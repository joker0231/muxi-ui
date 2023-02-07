import React from 'react'
import Icon from '../../Icon/BaseIcon/index'
import './index.less'
import Thumbs from '../../../assets/svg/commonIcon/thumbs.svg'
import ThumbsUp from '../../../assets/svg/commonIcon/thumbs_up.svg'
import Comment from '../../../assets/svg/commonIcon/comment.svg'
import { type StatusCardrops } from '../interface'
import Avatar from '../../../assets/images/avatar.png'
import RightClick from '../../RightClick/BaseUse/index'

const StatusCard: React.FC<StatusCardrops> = (props) => {
    let {
        id,
        avatar,
        username,
        time,
        onKeyPress,
        onClick,
        content,
        commentcount,
        liked,
        likecount,
        chooseLike,
        clickToComment,
        clickToDetail
    } = props

    if (!avatar) {
        avatar = Avatar
    }

    return (
        <>
            <div className="status-item" key={id}>
                <div className="information">
                    <img className="avatar" src={avatar} />
                    <div className="details">
                        <div className="name">{username}</div>
                        <div className="date">{time}</div>
                    </div>
                    <div className="link" onClick={clickToDetail}>
                        详情
                    </div>
                </div>
                <div
                    className="content"
                    role="button"
                    tabIndex={0}
                    onKeyPress={onKeyPress}
                    onClick={onClick}
                >
                    <div className="height-constraint">
                        {/* eslint-disable-next-line react/no-danger */}
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
                <div className="interaction">
                    <div className="feedback" onClick={clickToComment}>
                        <Icon src={Comment} width={21} height={21} />
                        <div className="number">{commentcount}</div>
                    </div>
                    <div
                        onClick={chooseLike}
                        onKeyPress={onClick}
                        role="button"
                        tabIndex={0}
                        className="feedback"
                    >
                        <Icon src={liked ? ThumbsUp : Thumbs} width={21} height={21} />
                        <div className="number">{likecount}</div>
                    </div>
                </div>
            </div>
            <RightClick
                selectionList={[
                    {
                        name: '点赞',
                        click: () => {
                            console.log(1)
                        }
                    },
                    {
                        name: '评论',
                        click: () => {
                            console.log(3)
                        }
                    }
                ]}
            />
        </>
    )
}

export default StatusCard
