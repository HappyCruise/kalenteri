import { createSelector } from "reselect";
import get from "lodash/get";
import orderBy from "lodash/orderBy";

//const selectEvents = state => state.events.map(event => event.name);
/*
export function searchEvents (state){
    return state.remoteEvents.filter((event) => event.name.toLowerCase().includes(state.searchText))
}
*/

const remoteEvents = state => state.remoteEvents;
const searchText = state => state.searchText;

export const searchEvents = createSelector(
    [remoteEvents, searchText],
    (a, b) =>{
        return a.filter((event) => event.name.toLowerCase().includes(b))
    }
)

/*
const eventsSelector = state => state && state.remoteEvents;

export const sortSelector = state => state && state.sortBy;

function orderByType(data, type){
    switch(type) {
        case "date":
            return Date.parse(data);
        case "float":
            return parseFloat(data);
        default:
            return data;
    }
}

export const getSortedEventsList = createSelector(
    eventsSelector,
    sortSelector,
    (remoteEvents, sort) => {
        if(sort) {
            return orderBy(
                remoteEvents,
                c => orderByType(get(c, sort.key), sort.type),
                [sort.order || "desc"]
            );
        }
        return remoteEvents;
    }
);
*/

