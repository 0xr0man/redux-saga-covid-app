const RAPID_API_HOST = process.env.REACT_APP_RAPID_API_HOST;
const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

//TODO write error handling
export function fetchFromApi({
    method,
    headers,
    endpoint,
}) {
    if(headers == null) {
        headers = {
            'x-rapidapi-key': RAPID_API_KEY,
            'x-rapidapi-host': RAPID_API_HOST,
        }
    }
    const url = endpoint;
    return fetch(url, {
        headers: headers
    }).then(response => response.json())
}
 export function getJson({headers, endpoint}) {
    return fetchFromApi({
        method: 'GET',
        headers,
        endpoint
    })
}
