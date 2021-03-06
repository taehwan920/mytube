import React from 'react';
import styled, { css } from 'styled-components';
import MainTitleAndDesc from './videoInfoInner/MainTitleAndDesc';
import MainComments from './videoInfoInner/MainComments';
import VideoNavNonPC from '../../../videoNavComponents/VideoNavNonPC';
import { isMobile } from 'react-device-detect';

const VideoInfoInnerWrapper = styled.div`
    background: inherit;
    max-width: 1280px;
    min-width: 426px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media(max-width: 1023px) {
        width: calc(${props => props.viewWidth}px - 48px);
    }

    @media(min-width: 1024px) and (max-width: 1754px) {
        width: calc(${props => props.viewWidth}px - 24px - 450px);
    }

    @media(min-width: 1755px) {
        width: calc(${props => props.viewWidth - props.newMargin * 2}px - 24px - 450px)
    }

    ${props => props.isMobile && css`
        max-width: 450px;
    `}
}
`;

export default class extends React.Component {
    render() {
        const {
            autoPlay,
            contentData,
            lang,
            langState,
            newMargin,
            nightMode,
            theaterMode,
            themeColor,
            toggleAutoPlay,
        } = this.props;
        const viewWidth = window.innerWidth;
        return (
            <VideoInfoInnerWrapper
                isMobile={isMobile}
                newMargin={newMargin}
                theaterMode={theaterMode}
                viewWidth={viewWidth}
            >
                <MainTitleAndDesc
                    contentData={contentData}
                    lang={lang}
                    langState={langState}
                    themeColor={themeColor}
                />
                <VideoNavNonPC
                    autoPlay={autoPlay}
                    contentData={contentData}
                    lang={lang}
                    langState={langState}
                    newMargin={newMargin}
                    nightMode={nightMode}
                    themeColor={themeColor}
                    toggleAutoPlay={toggleAutoPlay}
                />
                <MainComments
                    contentData={contentData}
                    lang={lang}
                    langState={langState}
                    themeColor={themeColor}
                />
            </VideoInfoInnerWrapper>
        )
    }
}