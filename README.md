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

- export pool
```bash

module.exports = pool;
```

- buat file migration

```bash
touch migration.js
```

- isi file migration buat table

```bash
const pool = require('./connection');
# create table categories
pool.query(`
    CREATE TABLE "Categories" (
        "id" SERIAL PRIMARY KEY,
        "categoryName" VARCHAR NOT NULL
    )
`, (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        console.log('table created');
        pool.end()
    }
});

#  create table cars
pool.query(`
CREATE TABLE "Cars" (
    "id" SERIAL PRIMARY KEY,
    "carName" VARCHAR NOT NULL,
    "price" INT NOT NULL,
    "licensePlate" VARCHAR NOT NULL,
    "year" INT NOT NULL,
    "categoryId" INT NOT NULL References "Categories"("id")
)
`, (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        console.log('table created');
        pool.end();
    }
});



```

- Jalan migration.js dan cek di dbBwear
```bash
node migration.js

```