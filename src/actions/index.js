export const STATS_LOAD_START = 'STATS/LOAD_START'
export const STATS_LOAD_SUCCESS = 'STATS/LOAD_SUCCESS'
export const STATS_LOAD_ERROR = 'STATS/LOAD_ERROR'
export const CONTINENT_STATS_LOAD_START = 'CONTINENT_STATS/LOAD_START'
export const CONTINENT_STATS_LOAD_SUCCESS = 'CONTINENT_STATS/LOAD_SUCCESS'
export const CONTINENT_STATS_LOAD_ERROR = 'CONTINENT_STATS/LOAD_ERROR'


export const getStats = () => ({
    type: STATS_LOAD_START,
});

export const getContinentStats = (continent) => ({
    type: CONTINENT_STATS_LOAD_START,
    continent: continent,
});