const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://torgge:Ervamate00@ds018258.mlab.com:18258/nofood'
    }
}

module.exports = variables