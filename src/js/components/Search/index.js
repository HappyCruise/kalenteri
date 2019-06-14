import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchText } from "../../actions/index";
import './index.scss';

export class Search extends Component {


    searchEvents(event){
        this.props.searchEvent(event.target.value)  
    }

    render(){
        return(
            <div className="Search">
                <input className="Search--input" type="text" placeholder="Search for events" onChange={this.searchEvents.bind(this)}/>                   
            </div>
        )
        
    }
    
}


const mapDispatchToProps = dispatch => {
    return {
        searchEvent: event => dispatch(setSearchText(event)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Search);



