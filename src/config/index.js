// mysql config
module.exports = {
    database: 'sun_sweets',
    username:'root',
    password:'1234',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
}