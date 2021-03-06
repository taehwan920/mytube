import React from 'react';
import styled from 'styled-components';
import VideoSummary from '../../../../../../DB/VideoSummary';
import RecommendItem from './recommendCenter/RecommendItem';

const RecommendsBox = styled.article`
    width: max-content;
    height: auto;
    display: grid;
    grid-template-rows: repeat(${props => props.rows}, 1fr);
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    gap: 4px;
    z-index: 3;
`;

export default class extends React.Component {
    state = {
        frameWidth: 0,
        rows: 0,
        columns: 0,
    };

    componentDidMount() {
        this.changeRecommends();
        window.addEventListener('resize', this.changeRecommends);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.changeRecommends);
    };

    componentDidUpdate(prevProps) {
        if (prevProps.theaterMode !== this.props.theaterMode) {
            this.changeRecommends();
        };
    };

    changeRecommends = () => {
        const videoFrame = document.querySelector('.video-frame');
        const windowWidth = window.innerWidth;
        if (windowWidth <= 520) {
            if (this.props.theaterMode) {
                this.setState({
                    frameWidth: videoFrame.clientWidth,
                    rows: 3,
                    columns: 2,
                });
            } else {
                this.setState({
                    frameWidth: videoFrame.clientWidth,
                    rows: 1,
                    columns: 2,
                });
            }
        } else if (windowWidth > 520 && windowWidth <= 687) {
            this.setState({
                frameWidth: videoFrame.clientWidth,
                rows: 2,
                columns: 2,
            });
        } else if (windowWidth > 687 && windowWidth <= 711) {
            this.setState({
                frameWidth: videoFrame.clientWidth,
                rows: 2,
                columns: 3,
            });
        } else if (windowWidth > 712 && windowWidth <= 1199) {
            this.setState({
                frameWidth: videoFrame.clientWidth,
                rows: 3,
                columns: 3,
            });
        } else if (windowWidth > 1199) {
            this.setState({
                frameWidth: videoFrame.clientWidth,
                rows: 3,
                columns: 4,
            });
        };
    };

    getRecommendVideos = () => {
        const { contentData } = this.props;
        const thisVideo = VideoSummary.filter(video => video.pageUrl === contentData.pageUrl)[0];
        const thisVidIdx = VideoSummary.indexOf(thisVideo);
        const nextVidIdx = thisVidIdx >= VideoSummary.length - 1 ? 0 : thisVidIdx + 1;
        const restOfVideos = VideoSummary.filter(video => VideoSummary.indexOf(video) !== thisVidIdx && VideoSummary.indexOf(video) !== nextVidIdx);
        return restOfVideos;
    };

    render() {
        const {
            lang,
            langState,
        } = this.props;
        const {
            frameWidth,
            rows,
            columns,
        } = this.state;
        const getVideos = this.getRecommendVideos();
        const doubled = [...getVideos, ...getVideos];
        const slicedVideos = doubled.slice(0, rows * columns);
        return (
            <RecommendsBox
                rows={rows}
                columns={columns}
                onClick={e => e.stopPropagation()}
            >
                {slicedVideos.map(video => {
                    return (
                        <RecommendItem
                            columns={columns}
                            frameWidth={frameWidth}
                            lang={lang}
                            langState={langState}
                            rows={rows}
                            video={video}
                        />
                    )
                })}
            </RecommendsBox>
        )
    }
};