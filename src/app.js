import React from "react";
import ReactDOM from "react-dom";

import {Router, Route, hashHistory} from 'react-router';

import 'antd/dist/antd.css';
import "./css/reset.css";

import MediaQuery from 'react-responsive';

//组件
import PcIndex from "./js/components/pc/pc_index.js";
import MobileIndex from "./js/components/mobile/mobile_index.js";
import PCNewsDetails from './js/components/pc/pc_news_details/pc_news_details.js';
import PCUserCenter from "./js/components/pc/pc_usercenter/pc_usercenter.js";

import MobileNewsDetails from './js/components/mobile/mobile_news_details/mobile_news_details.js';

class App extends React.Component{
  render(){
    return(
      <div>
      	<MediaQuery minDeviceWidth={1224}>
          <Router history={hashHistory}>
						<Route path="/" component={PcIndex}></Route>
            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
            <Route path="/usercenter" component={PCUserCenter}></Route>
					</Router>

        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <Router history={hashHistory}>
            <Route path="/" component={MobileIndex}></Route>
            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
          </Router>
        </MediaQuery>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById("app") );
