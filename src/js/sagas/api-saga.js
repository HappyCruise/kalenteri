import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_REQUESTED, DATA_LOADED, API_ERRORED } from "../constants/action-types";

//Every time DATA_REQUESTED is called, start a workerSaga()
export default function* watcherSaga(){
    yield takeEvery(DATA_REQUESTED, workerSaga);
    //yield takeEvery(DATA_SEARCH, searchSaga);
}

/*
function* searchSaga(){
    try{
        
        yield put({ type: DATA_SEARCHED })
    } catch(e) {
        yield put({ type: API_ERRORED})
    }
}
*/


//If succesfull, calls a DATA_LOADED and inserts the data as payload
//If unsuccesfull calls API_ERRORED and inserts the error code as the payload
function* workerSaga(){
    try{
        const payload = yield call(getData);
        yield put({ type: DATA_LOADED, payload });
    } catch(e) {
        yield put({ type: API_ERRORED, payload: e});
    }
}


//Gets the data from the API
function getData(){
    return fetch("https://cms.www.hackjunction.com/api/events")
        .then(response => response.json())
        .catch(e => console.log("Error in api-saga(getData): "+ e));
}