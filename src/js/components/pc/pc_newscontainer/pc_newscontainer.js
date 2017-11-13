import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;

import PCNewsBlock from '../pc_news_block/pc_news_block.js';
import PCNewsImageBlock from '../pc_news_image_block/pc_news_image_block.js';

import "./pc_newscontainer.css"
{/*/引入轮播图片/*/}
import Carousel1 from '../../../../images/carousel_1.jpg';
import Carousel2 from '../../../../images/carousel_2.jpg';
import Carousel3 from '../../../../images/carousel_3.jpg';
import Carousel4 from '../../../../images/carousel_4.jpg';

export default class PCNewsContainer extends React.Component {
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
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">
						<div className="leftContainer">
							<div className="carousel">
								<Carousel {...settings}>
									<div><img src={Carousel1}/></div>
									<div><img src={Carousel2}/></div>
									<div><img src={Carousel3}/></div>
									<div><img src={Carousel4}/></div>
								</Carousel>
							</div>
							<PCNewsImageBlock count={6} type="guoji" width="100%" cartTitle="国际头条" imageWidth="112px"/>
						</div>
						<div className="rightContainer">
							<div className="rigtTabs">
								<Tabs classNmae="tabs_news">
									<TabPane tab="头条新闻" key="1"  className="navbar">
										<PCNewsBlock count={10} type="top" width="100%" bordered="false"/>
									</TabPane>
									<TabPane tab="国际" key="2" className="navbar">
										<PCNewsBlock count={10} type="guoji" width="100%" bordered="false"/>
									</TabPane>
								</Tabs>
							</div>
							<div className="rigtTabs">
								<Tabs classNmae="tabs_news">
									<TabPane tab="娱乐新闻" key="1">
										<PCNewsBlock count={10} type="yule" width="50%" bordered="false"/>
									</TabPane>
									<TabPane tab="社会新闻" key="2">
										<PCNewsBlock count={10} type="shehui" width="50%" bordered="false"/>
									</TabPane>
								</Tabs>
							</div>


						</div>
						<div className="clear"></div>
						<div >
							<PCNewsImageBlock count={8} type="guonei" width="50%" cartTitle="国内新闻" imageWidth="132px"/>

							<PCNewsImageBlock count={16} type="yule" width="50%" cartTitle="娱乐新闻" imageWidth="132px"/>
						</div>

					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
