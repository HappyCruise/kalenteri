import React, { Component } from "react";
import { connect } from "react-redux";
import { sortEvent, ascOrDesc } from "../../actions/index"
import "./Sort.scss";

export class Sort extends Component {       


    handleSort(event){
        this.props.sortBy(event.target.value)
        //console.log(event.target.value)
    }

    handleAscDesc(event){
       // console.log(event.target.value)
        this.props.ascDesc(event.target.value)
    }
    render(){
        return(
            <div className="SortContainer">
                <h3>Sort by:</h3>
                <select onChange={this.handleSort.bind(this)}>
                    <option value="date">Date</option>
                    <option value="name">Name</option>
                </select>

                <select onChange={this.handleAscDesc.bind(this)}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
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
        ascDesc: event => dispatch(ascOrDesc(event)),
        sortBy: event => dispatch(sortEvent(event)),
        
    }
}

/*
const mapDispatchToProps = (dispatch) => ({
    sortBy: (event) => dispatch(sortEvent(event)),
    ascDesc: (event) => dispatch(ascOrDesc(event))
})
*/

export default connect(
    null,
    mapDispatchToProps
)(Sort);

