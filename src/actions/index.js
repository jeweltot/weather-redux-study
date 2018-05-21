import axios from 'axios';

const API_KEY = '8dd3f24e95629052946827ac3985078c';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHRER = 'FETCH_WEATHRER';

export function fetchWeather(city)
{
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get('http://cors-anywhere.herokuapp.com/' + url);

    return {
        type : FETCH_WEATHRER,
        payload : request
    }
}