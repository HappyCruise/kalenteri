
import React, { Component } from 'react';
import './Event.scss';
import moment from 'moment';

class Event extends Component {
	render() {
		const el = this.props.data;
		return (
			<div className="Event" key={el._id}>
				<img src={el.image.url} className="Event--bg-image" alt="event" />
				<div className="Event--content">
					<span className="Event--date">{moment(el.begins).format("dddd, MMMM Do YYYY")}</span>
					<span className="Event--name">{el.name}</span>
					<span className="Event--time">7:00 - 9:00pm</span>
					<span className="Event--description">{el.shortDescription}</span>
					
				</div>

			</div>
		)
	}
}

export default Event;
