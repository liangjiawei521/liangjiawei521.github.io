const mysql = require("mysql");
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'yunedu',
    port: 3306,
    connectionLimit: 0
});

let query = function(sql, params, callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            console.log(err)
            callback(err, null, null);
        } else {

            conn.query(sql, params, function(qerr, vals, fields) {
                //释放连接
                // conn.release();
                //事件驱动回调
                callback(qerr, vals, fields);
            });
            pool.releaseConnection(conn)
        }
    });
};

module.exports = {
    query
};