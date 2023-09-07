const pool = require('./connection');

// create table Categories
// pool.query(`
//     CREATE TABLE "Categories" (
//         "id" SERIAL PRIMARY KEY,
//         "categoryName" VARCHAR NOT NULL
//     )
// `, (error, result) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(result);
//         console.log('table created');
//          pool.end();
//     }
// });


// create table Cars
// pool.query(`
// CREATE TABLE "Cars" (
//     "id" SERIAL PRIMARY KEY,
//     "carName" VARCHAR NOT NULL,
//     "price" INT NOT NULL,
//     "licensePlate" VARCHAR NOT NULL,
//     "year" INT NOT NULL,
//     "categoryId" INT NOT NULL References "Categories"("id")
// )
// `, (error, result) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(result);
//         console.log('table created');
//         pool.end();
//     }
// });
