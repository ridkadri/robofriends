import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_LOADING, 
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload}
        default:
            return state;
    }
}

const initialStateRobots = {
    isLoading : false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action=[]) => {
    switch (action.type) {
        case REQUEST_ROBOTS_LOADING:
            return {...state, isLoading: true}
        case REQUEST_ROBOTS_SUCCESS:
            return {...state, robots: action.payload, isLoading:false}   
        case REQUEST_ROBOTS_FAILED:
            return {...state, error: action.payload, isLoading:false} 
        default:
            return state;
    }
}
