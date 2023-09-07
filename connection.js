const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rent',
    password: 'root',
    port: 5432, // default port postgres
})

pool.query('SELECT NOW()', (err, res) => {
   if(err){
       console.log(err);
   }else{
       console.log(res);
   }
})