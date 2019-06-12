import { DATA_LOADED, API_ERRORED, DATA_SEARCH, DATA_ASCDESC, DATA_SORT } from "../constants/action-types";



const initialState = {
    remoteEvents:[],
    searchText:'',
    sortBy:'date',
    ascOrDesc:'asc',

};

//Takes the state and does (action) to it
function rootReducer(state = initialState, action){
    switch(action.type){
        case DATA_SEARCH: {
           // console.log("Search data was called")
            //console.log("Haku teksti: "+action.payload);
            return Object.assign({}, state,{
                searchText: action.payload.toLowerCase(),
                //remoteEvents: state.remoteEvents.concat(data)
            });
        }
        
        case DATA_SORT: {
            console.log("SortBy: "+action.payload + " Asc/Desc: " + state.ascOrDesc)
            return Object.assign({}, state,{
                sortBy: action.payload,
            })
        }

        case DATA_ASCDESC:{
            console.log("SortBy: "+ state.sortBy + " Asc/Desc: " + action.payload)
            return Object.assign({}, state,{
                ascOrDesc: action.payload,
            })
        }
        case DATA_LOADED: {
            console.log('Data Was loaded')         
               return Object.assign({}, state,{
                  //  remoteEvents: action.payload
                    remoteEvents: state.remoteEvents.concat(action.payload)
                });
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
