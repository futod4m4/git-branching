// Application configuration
const config = {
    port: 3000,
    environment: 'development',
    database: {
        host: 'localhost',
        port: 5432,
        name: 'myapp_dev'
    },
    logging: {
        level: 'debug',
        file: 'app.log'
    }
};

module.exports = config;
