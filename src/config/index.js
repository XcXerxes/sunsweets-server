// mysql config
module.exports = {
    database: 'sun_sweets',
    username:'root',
    password:'root',
    host: '192.168.1.52',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
}