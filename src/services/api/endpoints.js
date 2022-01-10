function getDefaultEndpoint() {
    const RAPID_API_HOST = process.env["REACT_APP_API_URL"];
    return RAPID_API_HOST;
}

const endpoints = {
    allStats() {
        return `${getDefaultEndpoint()}countries`
    },
    continentStats(continent) {
        return `${getDefaultEndpoint()}${continent}`
    }
}

export default endpoints;
