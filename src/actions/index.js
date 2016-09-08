//axios is a library for making ajax requests
import axios from 'axios';

const API_KEY = "b20e1eae011460a435a2382c5117fe7d";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//variable for action type
export const FETCH_WEATHER = 'FETCH_WEATHER';


//action creator => always returns an action (an object that has a type)
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},kr`;
  const request = axios.get(url);
  //request is now a promise, but it doesn't contain any of the data

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
