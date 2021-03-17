import axios from "axios";

axios.defaults.baseURL = 'http://localhost:1234';

axios.interceptors.request.use(function (config) {
    if (config.url !== '/api/login')
        config.headers.Authorization = "AUTH_TOKEN_XXXXXXXXXXXX";

    console.log(config);
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    console.log(response);
    return response;
}, function (error) {
    return Promise.reject(error);
});

export { axios }