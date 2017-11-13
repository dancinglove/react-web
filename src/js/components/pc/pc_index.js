import React from 'react';

import PCHeader from './pc_header/pc_header.js';
import PCFooter from './pc_footer/pc_footer.js';

import PCNewsContainer from './pc_newscontainer/pc_newscontainer.js';

export default class PCIndex extends React.Component {
	render() {
		return (
			<div>
				<PCHeader></PCHeader>
				<PCNewsContainer></PCNewsContainer>
				<PCFooter></PCFooter>
			</div>
		);
	};
}
