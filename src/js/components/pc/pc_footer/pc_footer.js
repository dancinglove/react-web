import React from 'react';
import {Row, Col} from 'antd';

import './pc_footer.css';

export default class PCFooter extends React.Component {

	render() {
		return (
			<footer>
				<Row>
					<Col span={2}></Col>
					<Col span={20} >
						<div classNmae="footer">2017 ReactNews. All Rights Reserved.</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</footer>
		);
	};
}
