import { put, takeEvery, all, call } from 'redux-saga/effects';
import {
    STATS_LOAD,
    loadStatsStart,
    statsLoaded,
    statsErrorLoading,
    continentStatsLoaded,
    loadContinentStatsStart, CONTINENT_STATS_LOAD, continentStatsErrorLoading,
} from "../actions";
import api from "../services/api";

export function* fetchStats() {
    try {
        yield put(loadStatsStart())
        const json = yield call(api.stats.getAll)
        yield put(statsLoaded(json))
    } catch(error) {
        console.error(error);
        yield put(statsErrorLoading(error))
    }
}

export function* fetchStatsByContinent(continent) {
    try {
        yield put(loadContinentStatsStart())
        const json = yield call(api.stats.getByContinent, continent)
        yield put(continentStatsLoaded(json));
    } catch(error) {
        console.error(error);
        yield put(continentStatsErrorLoading(error))
    }
}

export function* onLoadStats() {
    yield call(fetchStats)
}

export function* onLoadContinentStats(action) {
    yield call(fetchStatsByContinent, action.continent)
}

export function* watchLoadStats() {
    yield takeEvery(STATS_LOAD, onLoadStats)
}

function* watchLoadContinentStats() {
    yield takeEvery(CONTINENT_STATS_LOAD, onLoadContinentStats)
}

export default function* rootSaga() {
    yield all([
        watchLoadStats(),
        watchLoadContinentStats(),
    ]);
}
