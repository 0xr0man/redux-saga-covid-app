export const STATS_LOAD = 'STATS/LOAD'
export const STATS_LOAD_START = 'STATS/LOAD_START'
export const STATS_LOAD_SUCCESS = 'STATS/LOAD_SUCCESS'
export const STATS_LOAD_ERROR = 'STATS/LOAD_ERROR'

export const CONTINENT_STATS_LOAD = 'CONTINENT_STATS/LOAD'
export const CONTINENT_STATS_LOAD_START = 'CONTINENT_STATS/LOAD_START'
export const CONTINENT_STATS_LOAD_SUCCESS = 'CONTINENT_STATS/LOAD_SUCCESS'
export const CONTINENT_STATS_LOAD_ERROR = 'CONTINENT_STATS/LOAD_ERROR'

export const loadStats = () => ({
    type: STATS_LOAD
})

export const loadStatsStart = () => ({
    type: STATS_LOAD_START,
})

export const statsLoaded = (json) => ({
    type: STATS_LOAD_SUCCESS,
    json: json,
})

export const statsErrorLoading = (errorDetails) => ({
    type: STATS_LOAD_ERROR,
    errorDetails
})

export const loadContinentStats = (continent) => ({
    type: CONTINENT_STATS_LOAD,
    continent: continent
})

export const loadContinentStatsStart = () => ({
    type: CONTINENT_STATS_LOAD_START,
});

export const continentStatsLoaded = (json) => ({
    type: CONTINENT_STATS_LOAD_SUCCESS,
    json: json
});

export const continentStatsErrorLoading = (errorDetails) => ({
    type: CONTINENT_STATS_LOAD_ERROR,
    errorDetails
})
