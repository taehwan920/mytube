import React from 'react';
import styled, { css } from 'styled-components';

const VideoFrame = styled.div`
    background: gray;
    width: 100vw;
    height: calc(100vw / 235 * 100);

    ${props => !props.theaterMode && css`
        max-width: 1280px;
        max-height: 720px;
        width: 68.45vw;
        height: calc(68.45vw / 16 * 9);
        margin-left: 0px;
        margin-top: 0px;

        @media(max-width: 1023px) {
            width: 95.1vw;
            height: calc(95.1vw / 16 * 9);
        }
    `}
`;

export default class extends React.Component {
    render() {
        const { theaterMode } = this.props;
        return (
            <VideoFrame theaterMode={theaterMode}>
            </VideoFrame>
        )
    }
}