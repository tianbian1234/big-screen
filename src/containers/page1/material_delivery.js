import React, { Component } from 'react';
import Title from '../../components/title';
import Subtitle from '../../components/subTitle';

import agv from '../../images/page1/AGV.png';
import lack from '../../images/page1/lack.png';

class Material extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { dataSource } = this.props;
        return(
            <div className="material-box">
                <div className="material-title">
                    <Title title="物料配送" />
                </div>
                <div className="material-content">
                    <div className="material-left">
                        <div>
                            <Subtitle title="实时车辆" />
                            <div className="carNum">
                                <img className="imgset" src={agv} alt="agv小车"/>
                                <p className="text">6</p>
                            </div>
                        </div>
                        <div>
                            <Subtitle title="缺料呼叫" />
                            <div className="material-lack">
                                <img className="imgset" src={lack} alt="缺料"/>
                                <p className="text">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="material-right">
                        <div className="title">
                            <Subtitle title="泵车线物料配送统计" />
                        </div>
                        <div>
                            <div></div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Material;