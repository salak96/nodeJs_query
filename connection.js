const {Pool} = require('pg');
//configurasi db user n password
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rental_cars',
    password: 'root',
    port: 5432, // default port postgres
    idleTimeoutMillis:100 //biar tidak pull.end()
})
//cek koneksi tanggal sekarang
// pool.query('SELECT NOW()', (err, result) => {
//    if(err){
//        console.log(err);
//    }else{
//        console.log(result);
//    }
// })

module.exports = pool;