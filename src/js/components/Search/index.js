import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchText } from "../../actions/index";
import "./Filter.scss";

export class Search extends Component {
   /*
    constructor(){
        super();
    }
   
    componentDidMount(){
        this.props.getData();
        
    }
    
    componentDidUpdate(){
        this.props.getData();
    }*/

    searchEvents(event){
        this.props.searchEvent(event.target.value)
       // console.log("props:" + JSON.stringify(this.props))
        
    }

    render(){
        return(
            <div className="SearchContainer">
                <form>
                    <input type="text" placeholder="Search for events" onChange={this.searchEvents.bind(this)}/>         
                </form>             
            </div>
        )
        
    }
    
}


/*
function mapStateToProps(state){
    return{
        searchText: state.searchText
    };
}
*/

const mapDispatchToProps = dispatch => {
    return {
        searchEvent: event => dispatch(setSearchText(event)),
        //getData: ()=> dispatch(getData())
        //getData: ()=> dispatch({ type: DATA_REQUESTED })
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Search);



