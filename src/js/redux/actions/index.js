//actions called to alter the Stores state
import { DATA_REQUESTED, DATA_SEARCH, DATA_SORT, DATA_ASCDESC } from "../constants/action-types";


export function getData(){
    return { type: DATA_REQUESTED };
}


export function setSearchText(payload){
    console.log("setSearchText was called with payload: " + payload)
    return { type: DATA_SEARCH, payload }
}

export function sortEvent(payload){
    console.log("sortEvent was called in actions, with payload: " +payload)
    return { type: DATA_SORT, payload}
}

export function ascOrDesc(payload){
    console.log("Asc or Desc was called with  payload: "+payload)
    return { type: DATA_ASCDESC, payload }
}
