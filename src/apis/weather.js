import axios from 'axios';

export default axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/forecast",
    params: {
        mode: "json",
        units: "imperial",
        APPID: "4564aea809af09507f4783c74a07613b"
    }
});