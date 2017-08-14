import React, { Component } from 'react';
import Title from '../../components/title';
import Subtitle from '../../components/subTitle';

class ProdectCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { dataSource } = this.props;
        return(
            <div className="product-box">
                <div className="product-title">
                    <Title title="设备生产参数" />
                </div>
                <div className="product-content">
                    <div className="product-left">
                        <Subtitle title={dataSource.code} />
                        <p className="name">{dataSource.name}</p>
                        <p className="status">{dataSource.status}</p>
                        <img src="" alt=""/>
                    </div>
                    <div className="product-table">
                        <div className="twoBox box-title">
                            <div className="two-one">当前加工产品</div>
                            <div className="two-two">当前刀具</div>
                        </div>
                        <div className="twoBox">
                            <div className="two-one">{dataSource.product}</div>
                            <div className="two-two">{dataSource.cutter}</div>
                        </div>
                        <div className="threeBox box-title">
                            <div>当前坐标X</div>
                            <div>当前坐标Y</div>
                            <div>当前坐标Z</div>
                        </div>
                        <div className="threeBox">
                            <div>{dataSource.x}</div>
                            <div>{dataSource.y}</div>
                            <div>{dataSource.z}</div>
                        </div>
                        <div className="threeBox box-title">
                            <div>进给速率</div>
                            <div>主轴速率</div>
                            <div>进给倍率</div>
                        </div>
                        <div className="threeBox">
                            <div>{dataSource.feedRate}</div>
                            <div>{dataSource.spindleSpeed}</div>
                            <div>{dataSource.feedRadio}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProdectCard;