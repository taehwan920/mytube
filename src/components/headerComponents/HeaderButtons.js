import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import HeaderApps from './headerPopUpComponents/HeaderAppsPopUp'
import HeaderAddVideoPopUp from './headerPopUpComponents/HeaderAddVideoPopUp';
import HeaderUserInfoPopUp from './headerPopUpComponents/HeaderUserInfoPopUp';
import AddVideoButton from './headerBtnComponents/AddVideoButton';
import AppsButton from './headerBtnComponents/AppsButton';

const HeaderBtnSectionWrapper = styled.div`
    width:225px;
    height: 40px;
    position: relative;
`;

const HeaderBtnSection = styled.section`
    width: 225px;
    height: 40px;
    position: absolute;
    display: flex;
    align-items: center;
`;

export const HeaderBtn = styled.button`
    width: 24px;
    height: 24px;
    margin: 0px 8px; 
    position: absolute;
    font-size: 19px;
    line-height: 1.35;
    color: rgba(0, 0, 0, 0.63);
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
`;

const MiniSearchBtn = styled(HeaderBtn)`
    display: none;
    @media (max-width: 767px) {
        position: absolute;
        display: inline-block;
        right: 182.5px;
    }
`;

export const PopUpAxisZ = css`
    z-index: 348;
`;

export const AddVideoBtn = styled(HeaderBtn)`
    right: 132.5px;
`;

export const AddVideoBtnPlusIcon = styled(HeaderBtn)`
    bottom: 0.1px;
    right: -4.5px;
    font-size: 10px;
    color: white;
`;

export const AppsBtn = styled(HeaderBtn)`
    right: 82.5px;
`;

const UserInfoIcon = styled.div`
    background-color: #AA47BC;
    width: 32px;
    height: 32px;
    position: absolute;
    right: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 32px;
    font-size: 20px;
    color: white;
    cursor: pointer;
`;

export const PopUpSection = styled.section`
    width: 229px;
    padding: 8px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const PopUpArticle = styled.div`
    width: 229px;
    height: 40px;
    padding: 0px 20px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

export const PopUpArticleIcon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 22px;
    font-size: 22px;
    text-align: center;
    line-height: 22px;
    color: red;
`;


const HeaderClickAni = keyframes`
    0% {
        background-color: rgba(0, 0, 0, 0.4);
        transform: scale(1);
    }
    30% {
        background-color: rgba(0, 0, 0, 0.2);
        transform: scale(1.7);
    }
    100% {
        background-color: rgba(0, 0, 0, 0);
        transform: scale(2);
    }
`;

export const ClickEffectHeader = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 24px;
    height: 24px;
    top: 0px;
    right: 0.3px;
    position: absolute;
    border-radius: 50%;

    &:active {
        animation: ${HeaderClickAni} 0.5s ease-in-out;
    }
    
`;

export default class extends React.Component {
    state = {
        addVideoON: false,
        appsON: false,
        userInfoON: true,
    }
    sanitize = picked => {
        const stateObj = Object.assign({}, this.state);
        const states = Object.keys(stateObj);
        const notPicked = states.filter(state => state !== picked);
        return [picked, ...notPicked];
    }

    onOff = stateType => () => {
        const states = this.sanitize(stateType);
        this.setState({
            [states[0]]: !this.state[states[0]],
            [states[1]]: false,
            [states[2]]: false,
        })
    }

    render() {
        const { addVideoON, appsON, userInfoON } = this.state
        return (
            <HeaderBtnSectionWrapper>
                <HeaderBtnSection>
                    <MiniSearchBtn>
                        <i class="fas fa-search"></i>
                        <ClickEffectHeader></ClickEffectHeader>
                    </MiniSearchBtn>
                    <AddVideoButton onOff={this.onOff('addVideoON')}></AddVideoButton>
                    <AppsButton onOff={this.onOff('appsON')}></AppsButton>
                    <UserInfoIcon onClick={this.onOff('userInfoON')} draggable="true">G</UserInfoIcon>
                </HeaderBtnSection>
                {addVideoON
                    ? <HeaderAddVideoPopUp addVideoON={addVideoON}></HeaderAddVideoPopUp>
                    : null}
                {appsON
                    ? <HeaderApps appsON={appsON}></HeaderApps>
                    : null}
                {userInfoON
                    ? <HeaderUserInfoPopUp userInfoON={userInfoON}></HeaderUserInfoPopUp>
                    : null}
            </HeaderBtnSectionWrapper>
        )
    }
}