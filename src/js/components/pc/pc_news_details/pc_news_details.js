import React from 'react';
import {Row, Col, BackTop} from 'antd';
import PCHeader from '../pc_header/pc_header.js';
import PCFooter from '../pc_footer/pc_footer.js';
import CommonComments from '../../common_comments/comments.js';
import './pc_news_details.css'
import PCNewsImageBlock from '../pc_news_image_block/pc_news_image_block.js';
export default class PCNewsDetails extends React.Component {
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
			<div>
				<PCHeader></PCHeader>
				<Row>
					<Col span={2}></Col>
					<Col span={14} className="container">
						<div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
						<CommonComments uniquekey={this.props.params.uniquekey}></CommonComments>
					</Col>
					<Col span={6}>
						<PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/>
					</Col>

					<Col span={2}></Col>
				</Row>
				<PCFooter></PCFooter>

				<BackTop/>
			</div>
		);
	};
}
