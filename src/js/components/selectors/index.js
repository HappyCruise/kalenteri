import { createSelector } from "reselect";
import sort from "lodash/sortBy";
import reverse from 'lodash/reverse';



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
