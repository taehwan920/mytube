import React from 'react';
import { ConfigItem, ConfigItemIcon, ConfigText, ItemLeftBox, ItemRightBox } from '../ConfigPopUp';

export default class extends React.Component {
    getSpeedtxt = (arr, list) => {
        const newTxt = list[arr.indexOf(true)]
        return newTxt
    }

    render() {
        const { togglePlayback, playbackArr, playbackList } = this.props;
        return (
            <ConfigItem
                onClick={togglePlayback}
            >
                <ItemLeftBox>
                    재생 속도
                </ItemLeftBox>
                <ItemRightBox>
                    <ConfigText>
                        {this.getSpeedtxt(playbackArr, playbackList) || '보통'}
                    </ConfigText>
                    <ConfigItemIcon>
                        <i class="fas fa-chevron-right"></i>
                    </ConfigItemIcon>
                </ItemRightBox>
            </ConfigItem>
        )
    }
}