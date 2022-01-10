import {
    STATS_LOAD_START,
    STATS_LOAD_SUCCESS,
    STATS_LOAD_ERROR,
    CONTINENT_STATS_LOAD_START,
    CONTINENT_STATS_LOAD_SUCCESS,
    CONTINENT_STATS_LOAD_ERROR,
} from "../actions";

const initialState = {
    loading: false,
    error: false,
    stats: null,
    continentStats: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case STATS_LOAD_START:
            return { ...state, loading: true};
        case STATS_LOAD_SUCCESS:
            return {...state, stats: action.json, loading: false, error: false}
        case STATS_LOAD_ERROR:
            return {...state, loading: false, error: true}
        case CONTINENT_STATS_LOAD_START:
            return {...state, loading: true};
        case CONTINENT_STATS_LOAD_SUCCESS:
            return {...state, continentStats: action.json, loading: false, error: false}
        case CONTINENT_STATS_LOAD_ERROR:
            return {...state, loading: false, error: true}
        default:
            return state;
    }
}
export default reducer;
