const axios = require('axios');
export function getInstance(){
    const instance = axios.create({
        baseURL: "https://api.dtutimes.live/v1/",
    });
    return instance;
}