const config = require('./../../config');
const axios = require("./../connectors/targetApi");
const cache = require('./../cache/main');

const refreshToken = () =>{
    cache.api.token = "";
    cache.api.headers[config.token.key] = cache.api.token;
    axios.defaults.headers.common[config.token.key] = cache.api.token;
}

module.exports = refreshToken;