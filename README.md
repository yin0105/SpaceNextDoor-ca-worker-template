
# Conditional access - Worker node [Template]

Template for creating worker nodes for the conditional access system.


## Installation

1. Set up the configuration file

```js
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
        url: ""
    }
}

module.exports = config;
```

Target = The IP of the target instance.

Master = The IP of the gateway.


## Configure template as new instance

Add the files with system specific includes/function in the functions folder.
- open door : the function that opens the door -> Returns a promise 
  - resolve = open, 
  - reject = did not open, throw error
- populate doors : add the doors to cache in the same format and call the callback function
```js
cache.doors['door'] = {
        status: 'closed',
        provider: config.providerId,
        doorId: 'door',
        internalId: 'door'
}
```
- refresh token : refresh the authentication token (if required)
- status door: get the status of the door `open` or `close`

## Usage
Start the server:

```bash
node server.js
```

