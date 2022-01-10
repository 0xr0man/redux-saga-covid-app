import {getJson} from "./fetch";
import endpoints from "./endpoints";

const api = {
    stats: {
        getAll: () => {
            return getJson({
                headers: null,
                endpoint: endpoints.allStats()
            })
        },
        getByContinent: (continent) => {
            return getJson({
                headers: null,
                endpoint: endpoints.continentStats(continent)
            })
        }
    }
}

export default api;
