import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../actions/index";
import { searchEvents, eventsSorted } from "../selectors/index";
import EventsNI from "../EventsNoImage/index"
import moment from "moment";
import "./Events.scss";
import Event from '../Event/index';


//Rendered in the App.jsx
export class Events extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getData();
        console.log('Events latautui, ja hakee datan')
    }

    //Displays the Events
    render() {
        return (
            <div className="EventContainer">
                <div>
                    {this.props.events.map(el => (
                        <Event data={el} key={el._id}/>
                       // <EventsNI data={el} />
                    ))}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        events: eventsSorted(state)
        // events: state.remoteEvents.filter((event) => event.name.toLowerCase().includes(state.searchText))
        // events: state.remoteEvents//.slice(0, 100)
    };
}


export default connect(
    mapStateToProps,
    { getData }
)(Events);
