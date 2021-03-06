import React from 'react';
import styled from 'styled-components';
import { PopUpArticle, PopUpArticleIcon } from '../HeaderButtons';

const AddVideoPopUpWrapper = styled.div`
    background: ${props => {
        if (props.theaterMode || props.nightMode) {
            return props.themeColor.nightMode.header.BG;
        } else {
            return props.themeColor.dayMode.header.BG;
        }
    }};
    border: solid 0.4px rgba(0, 0, 0, 0.3);
    border-top: none;
    width: 229px;
    padding: 8px 0px;
    position: absolute;
    top: 42px;
    right: 132.5px;
    display: ${props => props.addVideoON ? 'flex' : 'none'};
    flex-direction: column;
    z-index: 348;
    font-size: 14px;
    line-height: 36px;
`;



export default class extends React.Component {
    buildItems = (item) => {
        const {
            nightMode,
            theaterMode,
            themeColor,
        } = this.props;
        return (
            <PopUpArticle
                nightMode={nightMode}
                theaterMode={theaterMode}
                themeColor={themeColor}
            >
                <PopUpArticleIcon>{item[0]}</PopUpArticleIcon>
                <span>{item[1]}</span>
            </PopUpArticle>
        )
    }



    render() {
        const {
            addVideoON,
            lang,
            nightMode,
            theaterMode,
            themeColor,
        } = this.props;
        const popUpItems = [
            [<i class="far fa-play-circle"></i>, lang.header.addVideoPopUp.videoUpload],
            [<i class="fas fa-broadcast-tower"></i>, lang.header.addVideoPopUp.goLive]
        ];
        return (
            <AddVideoPopUpWrapper
                addVideoON={addVideoON}
                nightMode={nightMode}
                theaterMode={theaterMode}
                themeColor={themeColor}
            >
                {popUpItems.map((item) => this.buildItems(item))}
            </AddVideoPopUpWrapper>
        )
    }
}