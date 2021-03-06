import React from 'react';
import styled from 'styled-components';
import { ReplySwitchBox, ReplySwitchIcon, ReplySwitchText } from '../ReplySwitches';
import ReplyContents from './replyCloseSwitch/ReplyContents';

const ReplySwitchToInvisibleWrapper = styled.div`
    width: calc(100% - 56px);
    height: auto;
    margin-left: 56px;
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        const {
            closeReplies,
            lang,
            langState,
            replyItems,
            replyLength,
            themeColor,
        } = this.props;
        return (
            <ReplySwitchToInvisibleWrapper>
                <ReplySwitchBox
                    onClick={closeReplies}
                >
                    <ReplySwitchIcon
                        themeColor={themeColor}
                    >
                        <i class="fas fa-caret-up"></i>
                    </ReplySwitchIcon>
                    <ReplySwitchText
                        themeColor={themeColor}
                    >
                        {lang.comment.hideNum}{replyLength}{lang.comment.hideMeasure}
                    </ReplySwitchText>
                </ReplySwitchBox>
                {replyItems.map(replyItem => {
                    return (
                        <ReplyContents
                            lang={lang}
                            langState={langState}
                            replyItem={replyItem}
                            themeColor={themeColor}
                        />
                    )
                })}
            </ReplySwitchToInvisibleWrapper>
        )
    }
}