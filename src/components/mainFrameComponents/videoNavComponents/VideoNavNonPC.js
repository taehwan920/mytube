import React from 'react';
import styled from 'styled-components';
import { ToggleSwitch } from '../../Mixin';
import VideoItem from './VideoNavMixin/VideoItem';

const VideoNavNonPCWrapper = styled.nav`
    background-color: inherit;
    width: 100%;
    height: max-content;
    padding: 24px 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;

    @media (min-width: 1024px) {
        display: none;
    }
`;

const NextVideoSection = styled.section`
    width: 100%;
    heigth: 145px;
    display: flex;
    flex-direction: column;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
`;

const NextVideoHeader = styled.header`
    width: 100%;
    height: 22px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
`;

const NextVideoText = styled.div`
    width: max-content;
    height: 20px;
    font-size: 16px;
`;

const AutoPlayBox = styled.div`
    width: max-content;
    height: 22px;
    display: flex;
    align-items: center;
`;

const AutoPlayTxt = styled.span`
    width: max-content;
    height: 17px;
    margin-right: 8px;
    font-size: 13px;
`;

const arr = [];
for (let i = 0; i < 6; i++) {
    arr.push(i)
}

export default class extends React.Component {
    render() {
        return (
            <VideoNavNonPCWrapper>
                <NextVideoSection>
                    <NextVideoHeader>
                        <NextVideoText>
                            다음 동영상
                        </NextVideoText>
                        <AutoPlayBox>
                            <AutoPlayTxt>자동재생</AutoPlayTxt>
                            <ToggleSwitch></ToggleSwitch>
                        </AutoPlayBox>
                    </NextVideoHeader>
                    <VideoItem
                        title={'댕댕이와 행복한 시간'}
                        uploader={'YangTuber'}
                        views={'12만 회'}
                        timestamp={1596020833408}
                        videoUrl={'./videos/dog.mp4'}
                    />
                </NextVideoSection>
                {arr.map(item => {
                    return (
                        <VideoItem
                            title={'원숭이 쑈!'}
                            uploader={'YangTuber'}
                            views={'12만 회'}
                            timestamp={1596020833408}
                            videoUrl={'./videos/monkeyshow.mp4'}
                        />
                    )
                })}
            </VideoNavNonPCWrapper>
        )
    }
};