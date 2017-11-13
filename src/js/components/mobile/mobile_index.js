import React from 'react';
import MobileHeader from './mobile_header/mobile_header.js';
import MobileFooter from './mobile_footer/mobile_footer.js';
import MobileList from './mobile_list/mobile_list.js';

import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;



import Carousel1 from '../../../images/carousel_1.jpg';
import Carousel2 from '../../../images/carousel_2.jpg';
import Carousel3 from '../../../images/carousel_3.jpg';
import Carousel4 from '../../../images/carousel_4.jpg';

export default class MobileIndex extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};
		return (
			<div>
				<MobileHeader></MobileHeader>
				<Tabs>
					<TabPane tab="头条" key="1">

						<div className="carousel">
							<Carousel {...settings}>
								<div><img src={Carousel1}/></div>
								<div><img src={Carousel2}/></div>
								<div><img src={Carousel3}/></div>
								<div><img src={Carousel4}/></div>
							</Carousel>
						</div>

						<MobileList count={10} type="top"/>
					</TabPane>
					<TabPane tab="社会" key="2">
						<MobileList count={20} type="shehui"/>
					</TabPane>
					<TabPane tab="国内" key="3">
						<MobileList count={20} type="guonei"/>
					</TabPane>
					<TabPane tab="国际" key="4">
						<MobileList count={20} type="guoji"/>
					</TabPane>
					<TabPane tab="娱乐" key="5">
						<MobileList count={20} type="yule"/>
					</TabPane>
				</Tabs>
				<div>向上拉获取更多的新闻</div>

				<MobileFooter></MobileFooter>
			</div>
		);
	};
}
