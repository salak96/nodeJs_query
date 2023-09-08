const pool = require('./connection');
const fs  = require('fs');

const categoriesData = fs.readFileSync('./data/categories.json', "utf-8");

console.log(categoriesData);

