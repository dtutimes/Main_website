import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.dtutimes.com/v1/',
})

// let AUTH_TOKEN = localStorage.getItem('token');

// if (AUTH_TOKEN) { instance.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`; }


// export const handle = (res) => {
//     if (res.status === 401) {
//         localStorage.removeItem('token');

//         const error = (res.data) || res.statusText;
//         return Promise.reject(error);
//     }

//     return res.data;
// } 

export { instance as api };

export default instance;