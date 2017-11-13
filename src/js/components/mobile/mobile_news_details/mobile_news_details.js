import React from 'react';
import {Row, Col, BackTop} from 'antd';
import MobileHeader from '../mobile_header/mobile_header.js';
import DetailFooter from '../detail_footer/detail_footer.js';
import CommonComments from '../../common_comments/comments.js';


import './mobile_news_details.css';
export default class MobileNewsDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			newsItem: ''
		};
	};
	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		})
	};
	createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};
	render() {
		return (
			<div id="mobileDetailsContainer">
				<MobileHeader></MobileHeader>
				<div className="ucmobileList">
					<Row>
						<Col span={24} className="container">
							<div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
						</Col>
						<CommonComments uniquekey={this.props.params.uniquekey}></CommonComments>
					</Row>

					<DetailFooter></DetailFooter>
					<BackTop />
				</div>
			</div>
		);
	};
}
