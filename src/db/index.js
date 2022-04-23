const mysql = require('mysql')

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Zsd123456',
    port: '3306',
    database: 'mySever',
    multipleStatements: true
})

exports.query = sql => {
    return new Promise((res, rej) => {
        pool.query(sql, (err, results, fields) => {
            if (err) {
                return rej(err)
            }
            res(results)
        })
    })
}