const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://torgge:Ervamate00@ds018258.mlab.com:18258/nofood'
    },
    Security: {
        secretkey: '832935e6a95e7de1b69cd8f0e8b8cf13'
    }
}

module.exports = variables