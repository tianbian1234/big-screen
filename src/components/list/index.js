import React, { Component } from 'react';
import './styles.scss';

import { station } from '../../public/station';

class List extends Component {
    constructor(props) {
        super(props);
    }
    handleRenderLi = (data) => {
      return  data.info.map((d, i) => (
          <li className="out-box">
              <div className="li-box">
                  <div className="border-left"></div>
                  <div className="text">
                      <div className="back"></div>
                      <div className="text-box">{d.code}</div>
                  </div>
              </div>
              <div className="li-box">
                  <div className="border-left"></div>
                  <div className="text">
                      <div className="back"></div>
                      <div className="text-box">{d.ID}</div>
                  </div>
              </div>
              <div className="li-box">
                  <div className="border-left"></div>
                  <div className="text">
                      <div className="back"></div>
                      <div className="text-box">{d.supply}</div>
                  </div>
              </div>
          </li>
      ))
    };
    render() {
        const { dataSource } = this.props;
        return (
            <ul className="list-box">
                {
                    station && this.handleRenderLi(station[0])
                }
            </ul>
        )
    }
}
export default List;