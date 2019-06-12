import React, { Component } from 'react';
import './Divider.scss';

class Divider extends Component {

	render() {

		let className = 'Divider';

		if (this.props.sm) {
			className += ' Divider-sm';
		}

		if (this.props.lg) {
			className += ' Divider-lg';
		}

		return (
			<div className={className} />
		)
	}
}

export default Divider;