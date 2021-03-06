import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
    width: 155px;
    height: 40px;
    position: absolute;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 20px;
    z-index: 25;
`;

const LogoImg = styled.img`
    height: 21px;
    margin-left: 30px;
    position: absolute;
    right: 0;
`;

const DayImg = styled(LogoImg)`
    opacity: ${props => {
        if (props.theaterMode || props.nightMode) {
            return 0;
        } else {
            return 1;
        }
    }};
`;

const NightImg = styled(LogoImg)`
    opacity: ${props => {
        if (props.theaterMode || props.nightMode) {
            return 1;
        } else {
            return 0;
        }
    }};
`;

const LogoLink = styled.a`
    height: 21px;
    margin-bottom: 1px;
`;

const LanguageMark = styled.div`
    position: absolute;
    top: 8px;
    left: 103%;
    color: ${props => {
        if (props.theaterMode || props.nightMode) {
            return props.themeColor.nightMode.grayFont;
        } else {
            return props.themeColor.dayMode.grayFont;
        }
    }};
    font-size: 10px;
`;

const MenuBtn = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 24px;
    height: 24px;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s linear;

    color: ${props => {
        if (props.theaterMode || props.nightMode) {
            return props.themeColor.nightMode.normalFont;
        } else {
            return props.themeColor.dayMode.normalFont;
        }
    }};
`;

export const ClickEffect = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 24px;
    height: 24px;
    top: 0px;
    left: 0.3px;
    position: absolute;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.05s ease-in-out;

    &:active {
        transform: scale(1.5);
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

export default class extends React.Component {
    render() {
        const {
            langState,
            nightMode,
            theaterMode,
            themeColor,
        } = this.props;
        return (
            <LogoWrapper>
                <MenuBtn
                    onClick={this.props.toggleGuide}
                    nightMode={nightMode}
                    theaterMode={theaterMode}
                    themeColor={themeColor}
                >
                    <ClickEffect />
                    <i class="fas fa-bars"></i>
                </MenuBtn >
                <LogoLink
                    href="#/"
                    rel="noreferer noopener"
                >
                    <NightImg
                        nightMode={nightMode}
                        theaterMode={theaterMode}
                        themeColor={themeColor}
                        alt="YangTube"
                        src="./images/logo_alter.png"
                    />
                    <DayImg
                        nightMode={nightMode}
                        theaterMode={theaterMode}
                        themeColor={themeColor}
                        alt="YangTube"
                        src="./images/youtubefont3.png"
                    />
                    <LanguageMark
                        nightMode={nightMode}
                        themeColor={themeColor}
                    >
                        {langState}
                    </LanguageMark>
                </LogoLink>
            </LogoWrapper>
        )
    }
};