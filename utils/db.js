const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'joga_mysql'
})

connection.connect(function(err) {
    if (err) {
        return console.error('Error msg: ' + err.message)
    }
    console.log('Connected to the MySQL server 2.')
})

module.exports = connection