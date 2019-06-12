import { createSelector } from "reselect";
import get from "lodash/get";
import sort from "lodash/sortBy";
import reverse from 'lodash/reverse';

//const selectEvents = state => state.events.map(event => event.name);
/*
export function searchEvents (state){
    return state.remoteEvents.filter((event) => event.name.toLowerCase().includes(state.searchText))
}
*/

const remoteEvents = state => state.remoteEvents;
const searchText = state => state.searchText;
const sortBy = state => state.sortBy;
const ascOrDesc = state => state.ascOrDesc;

export const searchEvents = createSelector(
    [remoteEvents, searchText],
    (events, searchText) => {
        return events.filter((event) => event.name.toLowerCase().includes(searchText))
    }
);

export const eventsSorted = createSelector(
    [searchEvents, sortBy, ascOrDesc],
    (filteredEvents, sortBy, ascOrDesc) => {
        const sorted = sort(filteredEvents, (event) => {
            return event[sortBy];
        });

        if (ascOrDesc === 'desc') {
            return reverse(sorted);
        }
        return sorted;
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

