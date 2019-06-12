import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../actions/index";
import { searchEvents } from "../selectors/index";
import moment from "moment";
import "./Events.scss";


//Rendered in the App.jsx
export class Event extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getData();
        console.log('Events latautui, ja hakee datan')
        //console.log(this.props.events)
    }

    //Displays the data <button onClick={() => sortBy('name')}>Sort By Name</button>
    render() {
        return (
            <div className="EventContainer">

                <ul>
                    {this.props.events.map(el => (

                        <li className="Event" key={el.id}>

                            <h1>{el.name}</h1>

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
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        events: searchEvents(state)
        // events: state.remoteEvents.filter((event) => event.name.toLowerCase().includes(state.searchText))
        // events: state.remoteEvents//.slice(0, 100)
    };
}


export default connect(
    mapStateToProps,
    { getData }
)(Event);
