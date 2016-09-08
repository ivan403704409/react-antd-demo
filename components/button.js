import React from 'react';
import CommonBtn from './CommonBtn.js'

class Comment extends React.Component {
	// constructor(args) {
	// 	// code
	// }

	render() {
		return (
			<div>
				Hello {this.props.name}!
				<CommonBtn/>
			</div>
		)
	}
}

export default Comment