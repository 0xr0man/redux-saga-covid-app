import { put, takeLatest, all, call } from 'redux-saga/effects';
import { 
    STATS_LOAD_START,
     STATS_LOAD_SUCCESS,
     STATS_LOAD_ERROR,
     CONTINENT_STATS_LOAD_START,
     CONTINENT_STATS_LOAD_SUCCESS,
     CONTINENT_STATS_LOAD_ERROR,
} from "../actions";

const RAPID_API_HOST = process.env.REACT_APP_RAPID_API_HOST;
const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

function* fetchStats() {
    const json = yield call(()=> 
        fetch(API_URL + '/countries', {
            headers: {
                'x-rapidapi-key': RAPID_API_KEY,
                'x-rapidapi-host': RAPID_API_HOST,
            },
        })
        .then(response => response.json())
    )
    
    yield put({ type: STATS_LOAD_SUCCESS, json: json || [{ type: STATS_LOAD_ERROR }]}); 
}

function* fetchStatsByContinent(action) {
    const json = yield call(()=> 
        fetch(API_URL + '/'+action.continent, {
            headers: {
                'x-rapidapi-key': RAPID_API_KEY,
                'x-rapidapi-host': RAPID_API_HOST,
            },
        })
        .then(response => response.json())
    )
    yield put({type: CONTINENT_STATS_LOAD_SUCCESS, json: json || [{type: CONTINENT_STATS_LOAD_ERROR}] });
}

function* watchStatsLoad() {
        yield takeLatest(STATS_LOAD_START, fetchStats);
}

function* watchContinentStatsLoad() {
    yield takeLatest(CONTINENT_STATS_LOAD_START, fetchStatsByContinent);
}

export default function* rootSaga() {
    yield all([
        watchStatsLoad(),
        watchContinentStatsLoad(),
    ]);
}