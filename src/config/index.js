module.exports = {
    database: 'sunSweets',
    username:'root',
    password:'1234',
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
}