const pool = require('./connection');
const fs  = require('fs');

const categoriesData = fs.readFileSync('./data/categories.json', "utf-8");
const parseCategories = JSON.parse(categoriesData);

// //console.log(parseCategories); //object
//  console.log(categoriesData); // objecct as a string

const categoriesValue = parseCategories.map(element => {
    return `("${element.categoryName}")`;
}).join(', \n');
console.log(categoriesValue)

pool.query(`
    INSERT INTO "Categories" ("categoryName") 
    VALUES ${categoriesValue}
    `), (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        console.log('table created');
        pool.end();
    }
}