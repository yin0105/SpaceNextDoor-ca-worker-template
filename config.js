const config = {
    providerId: "",
    doors: [],
    server:{
        cors: {
            enabled: true,
            origin: []
        },
        https: {
            enabled: false,
            key: "",
            cert: "",
            port: 443
        },
        http:{
            enabled: true,
            port: 80
        }
    },
    token:{
        fetch: false,
        key: "",
        refresh: 0
    },
    authentication:{
        username: "",
        password: "",
        headers: {}
    },
    master:{
        url: ""
    },
    target: {
        url: "http://127.0.0.1/"
    }
}

module.exports = config;