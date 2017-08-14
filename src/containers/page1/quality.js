import React, { Component } from 'react';
import Title from '../../components/title';
import Subtitle from '../../components/subTitle';
import List from '../../components/list';

class Quality extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="quality-box">
                <div className="quality-title">
                    <Title title="质量控制" />
                </div>
                <div className="quality-content">
                    <div className="quality-left">
                        <div className="title">
                            <Subtitle title="泵车质检结果统计" />
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="quality-right">
                        <div className="title">
                            <Subtitle title="质量信息追溯" />
                        </div>
                        <div className="list">
                            <List />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quality;