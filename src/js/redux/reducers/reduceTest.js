import { DATA_LOADED, API_ERRORED, DATA_FILTER, DATA_SEARCHED, DATA_SEARCH } from "../constants/action-types";
import { getData } from "../actions";
import { connect } from "react-redux";


const initialState = {
    remoteEvents:[],
    searchText:'',
    selectedFilter:'',
    selectedSort:'',
};

//Takes the state and does (action) to it
function rootReducer(state = initialState, action){
    switch(action.type){
        case DATA_SEARCH: {
            console.log("Search data was called")
            console.log(action.data);
            return Object.assign({}, state,{
                searchText: action.payload,
                //remoteEvents: state.remoteEvents.concat(data)
            });
        }
        /*
        case DATA_FILTER: {

            return Object.assign({},state,{
                remoteEvents: state.remoteEvents.concat(action.payload.name.startsWith(this.props.state.filterText))
            });
        }
        */
       //If the data loads correctly, add it to the list
        case DATA_LOADED: {
            console.log('Data Was loaded')
            if (state.searchText==='') {
                return Object.assign({}, state,{
                    
                    remoteEvents: state.remoteEvents.concat(action.payload)
                });
            } /*else{
                let result = _.pickBy(action.payload, function(value, key) {
                    return _.startsWith(key, "a");
                })

                console.log(result.a)
                
                return Object.assign({}, state, {
                    remoteEvents: result
                });
            } */
            
        }
        //IF the data loads incorrectly, log an error.
        case API_ERRORED: {
            console.log('There was an error with the API: ' + action.payload);
            break;
        }
        default: return state;
    };
    return state;
};

export default rootReducer;
