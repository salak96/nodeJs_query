<!-- @format -->

## Belajar Node JS RWID PostgreSql

-   Instal Node JS

```bash
npm init
```

-   Install Postgre SQL

```bash
npm install pg
```

## Programmatic

-   Setting DB buat dulu DB sesuai nama contoh mydb dan sesuai password

```bash
import { Pool, Client } from 'pg'

const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})

```

-   atau

```bash
const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydb',
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
```

-  Create file Connection.js 

```bash
touch connection.js
```

- Check Koneksi db dengan query tanggal sekarang

```bash
node connection.js
```
