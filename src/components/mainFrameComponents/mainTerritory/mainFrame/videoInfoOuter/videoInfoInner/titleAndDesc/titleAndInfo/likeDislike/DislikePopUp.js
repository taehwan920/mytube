import React from 'react';
import styled from 'styled-components';


const DislikePopUpBox = styled.div`
    background: rgba(0, 0, 0, 0.6);
    width: max-content;
    height: max-content;
    padding: 4px 10px;
    border-radius: 2px;
    position: absolute;
    top: 150%;
    left: 10%;
    font-size: 12px;
    color: white;
    transition: opacity 0.2s ease-out;
    cursor: default;
`;

export default class extends React.Component {
    render() {
        const {
            lang,
            likeHovering,
            isLike
        } = this.props;
        return (
            <React.Fragment>
                {likeHovering && !isLike
                    ?
                    <DislikePopUpBox
                        isLike={isLike}
                        likeHovering={likeHovering}
                    >
                        {lang.title.dislike}
                    </DislikePopUpBox>
                    : null}
            </React.Fragment>
        )
    }
};