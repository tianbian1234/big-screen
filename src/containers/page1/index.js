import React, { Component } from 'react';
import './styles.scss';

import Box from '../../components/box';
import Title from '../../components/title';
import Subtitle from '../../components/subTitle';
import ProdectCard from './product_card';
import Material from './material_delivery';
import Quality from './quality';
import { parameters } from '../../public/parameters'
import { materials } from '../../public/matter'

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }
    }
    componentDidMount(){
        this.interval = setInterval(this.handleGetTime, 1000)
    }

    handleGetTime = () => {
        let weekDay = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        let _this = this;
        let date = new Date();
        let day = date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日';
        let week = weekDay[date.getDay()];
        let timeNow = date.getHours()+':'+date.getMinutes();

        _this.setState({
            time: day + week + timeNow
        })
    };

    render() {
        return(
            <div className="page1-container">
                <Box
                  top={80}
                  left={50}
                  width={1360}
                  height={640}
                >
                </Box>
                <Box
                  top={80}
                  left={1450}
                  width={430}
                  height={330}
                >
                    <div className="workshop18">
                        <p>18号厂房</p>
                    </div>
                    <Subtitle title={this.state.time} />
                    <div className="plan-box">
                        <div className="todayPlan">
                            <Title title="今日计划" />
                            <p className="num">
                                55
                            </p>
                        </div>
                        <div className="actual">
                            <Title title="实际执行" />
                            <p className="num">
                                32
                            </p>
                        </div>
                    </div>
                </Box>
                <Box
                  top={410}
                  left={1450}
                  width={430}
                  height={310}
                >
                    <Title title="本月计划执行准确率" />
                    <div className="huan-box">

                    </div>
                </Box>
                <Box
                  top={720}
                  left={50}
                  width={1820}
                  height={320}
                >
                    <ProdectCard
                      dataSource={parameters[0]}
                    />
                    <Material
                      dataSource={materials}
                    />
                    <Quality />
                </Box>
            </div>
        )
    }
}

export default Page1;