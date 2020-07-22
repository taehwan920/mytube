import React from 'react';
import styled, { css } from 'styled-components';
import { shortNum } from '../../../../DB';

const LikeAndReplyWrapper = styled.div`
    width: 100%;
    height: 33px;
    font-size: 14px;
    display: flex;
    align-items: center;
    
`;

const HoveringIcon = css`
    &:hover {
        color: rgba(0, 0, 0, 0.6);
    }
`;

const LikeIcon = styled.div`
    width: 32px;
    height: 32px;
    padding: 8px;
    font-size: 16px;
    line-height: 0px;
    color: ${props => props.liked ? '#065FD4' : '#999999'};
    cursor: pointer;
    
    ${HoveringIcon}
    
`;

const DislikeIcon = styled(LikeIcon)`
    line-height: 25px;
    color: ${props => props.disliked ? '#065FD4' : '#999999'};
    cursor: pointer;

    ${HoveringIcon}
`;

const LikeNum = styled.div`
    min-width: 7.5px;
    height: 18px;
    margin-right: 8px;
    line-height: 22px;
    font-size: 12px;
    color: ${props => props.liked ? '#065FD4' : '#999999'};
    cursor: pointer;

    ${HoveringIcon}
`;

const ReplyBtn = styled.div`
    min-width: 67px;
    width: max-content;
    height: 33px;
    padding: 8px 16px;
    text-align: center;
    cursor: pointer;
    position: relative;
`;

const ClickEffect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.1s linear;
    
    &:active{
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export default class extends React.Component {
    state = {
        liked: false,
        disliked: false
    }

    toggleLike = () => {
        this.setState({
            liked: !this.state.liked,
            disliked: false
        })
    }

    toggleDislike = () => {
        this.setState({
            liked: false,
            disliked: !this.state.disliked
        })
    }

    shortenNum = (num, lang) => {
        if (num < 1000) { return [num] }
        const divider = shortNum[lang];
        for (let i in divider) {
            if (num / divider[i][0] >= 1) {
                let temp = parseInt(num / divider[i][0] * 10) / 10;
                return [temp, divider[i][1]];
            }
        };
    };

    render() {
        const { toggleReply, like } = this.props;
        const { liked, disliked } = this.state;
        const likedNumber = this.shortenNum(like, 'kr');
        return (
            <LikeAndReplyWrapper>
                <LikeIcon
                    liked={liked}
                    onClick={this.toggleLike}
                >
                    <i class="fas fa-thumbs-up"></i>
                </LikeIcon>
                <LikeNum
                    liked={liked}
                    onClick={this.toggleLike}
                >
                    {likedNumber.length < 2
                        ? likedNumber[0]
                        : `${likedNumber[0]}${likedNumber[1]}`}
                </LikeNum>
                <DislikeIcon
                    disliked={disliked}
                    onClick={this.toggleDislike}
                >
                    <i class="fas fa-thumbs-down"></i>
                </DislikeIcon>
                <ReplyBtn
                    draggable="true"
                    onClick={toggleReply}>
                    답글
                    <ClickEffect></ClickEffect>
                </ReplyBtn>
            </LikeAndReplyWrapper>
        )
    }
}