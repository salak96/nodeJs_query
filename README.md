## Belajar Node JS RWID PostgreSql

-   Instal Node JS

## Authors

- [@salak96](https://github.com/salak96)

```bash
npm init
```

-   Install Postgre SQL

```bash
npm install pg
```

## Programmatic
- Create file Connection.js

```bash
touch connection.js
```

-   Isi file Connection.js

```bash
const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sesuaikan',
    password: 'sesuaikan',
    port: 5432, // default port postgres
})

pool.query('SELECT NOW()', (err, res) => {
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
 })

module.exports = pool;
```

-   Check Koneksi db dengan query tanggal sekarang

```bash
node connection.js
```

-   export pool

```bash

module.exports = pool;
```

-   buat file migration

```bash
touch migration.js
```

-   isi file migration buat table

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

-   Jalan migration.js dan cek di dbBwear

```bash
node migration.js

```

-   Buat dumyData Seeder

```bash
touch seeder.js
```

-   Buat folder Data menampung datanya

```bash
mkdir data
```

-   buat file categories.json & cars.json di folder data dan disi

```bash
#data categories.json
[
    {
      "category": "SUV"
    },
    {
      "category": "MPV"
    },
    {
      "category": "Hatchback"
    },
    {
      "category": "City Car"
    },
    {
      "category": "LCGC"
    }
  ]
#cars
[
    {
      "carName": "Avanza",
      "price": 225000,
      "licensePlate": "B1376HU",
      "year": 2015,
      "CategoryId": 2
    },
    {
      "carName": "Xenia",
      "price": 225000,
      "licensePlate": "B1421JK",
      "year": 2015,
      "CategoryId": 2
    },
    {
      "carName": "Jazz RS",
      "price": 325000,
      "licensePlate": "B1421JK",
      "year": 2017,
      "CategoryId": 4
    },
    {
      "carName": "Brio",
      "price": 325000,
      "licensePlate": "D1322LK",
      "year": 2018,
      "CategoryId": 5
    },
    {
      "carName": "Expander",
      "price": 225000,
      "licensePlate": "B2134SK",
      "year": 2020,
      "CategoryId": 1
    },
    {
      "carName": "All New Avanza",
      "price": 250000,
      "licensePlate": "D3145KC",
      "year": 2021,
      "CategoryId": 2
    },
    {
      "carName": "Grand New Innova Reborn",
      "price": 375000,
      "licensePlate": "B4134SK",
      "year": 2021,
      "CategoryId": 2
    },
    {
      "carName": "HRV",
      "price": 600000,
      "licensePlate": "D4524MK",
      "year": 2020,
      "CategoryId": 2
    },
    {
      "carName": "Ayla",
      "price": 225000,
      "licensePlate": "B1353VSA",
      "year": 2017,
      "CategoryId": 5
    },
    {
      "carName": "Yaris",
      "price": 325000,
      "licensePlate": "D9054LL",
      "year": 2018,
      "CategoryId": 3
    }
  ]
```

-   Isi seeder.js

```bash
const pool = require('./connection');
const fs  = require('fs');

const categoriesData = fs.readFileSync('./data/categories.json', "utf-8");

console.log(categoriesData);



```
