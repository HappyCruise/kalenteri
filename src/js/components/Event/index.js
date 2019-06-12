import React, { Component } from 'react';
import './Event.scss';
import moment from 'moment';

class Event extends Component {
	render() {
		const el = this.props.data;
		return (
			<div className="Event" key={el.id}>
				<img src={el.image.url} className="Event--bg-image" alt="event" />
				<div className="Event--content">
					<span className="Event--date">{moment(el.begins).format("dddd, MMMM Do YYYY")}</span>
					<span className="Event--name">{el.name}</span>
					<span className="Event--time">7:00 - 9:00pm</span>
					<span className="Event--description">{el.shortDescription}</span>
				</div>
				{/* <h1>{el.name}</h1>

				<p className="shortDesc">{el.shortDescription}</p>

				<h3 className="starts">Starts:</h3>
				<p className="beginTime">{moment(el.begins).format("dddd, MMMM Do YYYY")}</p>

				<h3 className="ends">Ends:</h3>
				<p className="endTime">{el.ends}</p>

				<h3>How often?</h3>
				{el.timeDescription}

				<h3>Location:</h3>
				{el.locationDescription}

				<div className="ImageContainer">
					<img src={el.image.url} className="Image" alt="" />
				</div> */}
			</div>
		)
	}
}

export default Event;