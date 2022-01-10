import {
    fetchStats, fetchStatsByContinent,
} from './index'

import {
    continentStatsLoaded,
    loadContinentStatsStart,
    loadStatsStart,
    statsErrorLoading,
    statsLoaded
} from "../actions";

import {call, put} from "redux-saga/effects"
import api from "../services/api";

describe('Stats saga', () => {
    describe('onLoad stats', () =>
    {
        // why is sut name for testing generator?
        const generator = fetchStats()

        it('should fetch stats', () => {
            expect(generator.next().value).toEqual(put(loadStatsStart()))
            expect(generator.next().value).toEqual(
                call(api.stats.getAll)
            )
            expect(generator.next().value).toEqual(
                put(statsLoaded())
            )
            expect(generator.next().value).toBeUndefined()
        })
    })

    describe('onLoad continent stats', () =>
    {
        // why is sut name for testing generator?
        const generator = fetchStatsByContinent('europe')

        it('should fetch continent stats', () => {
            expect(generator.next().value).toEqual(put(loadContinentStatsStart()))
            expect(generator.next().value).toEqual(
                call(api.stats.getByContinent, 'europe')
            )
            expect(generator.next().value).toEqual(
                put(continentStatsLoaded())
            )
            expect(generator.next().value).toBeUndefined()
        })
    })
});
