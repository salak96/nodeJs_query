const { error } = require('console');
const pool = require('./connection');
const fs  = require('fs');
//import data dumy daru data categories.json dan end code utf-8
const categoriesData = fs.readFileSync('./data/categories.json', "utf-8");
//convert ke json
const parseCategories = JSON.parse(categoriesData);
// console.log(parseCategories)

// 2 cars
const carsData = fs.readFileSync('./data/cars.json', "utf-8");
const parseCars = JSON.parse(carsData);
console.log(carsData)
//cars map
const carsValue = parseCars
  .map((element) => {
    if (element.categoryId !== undefined) {
      return `('${element.carName}', '${element.price}', '${element.licensePlate}', '${element.year}', '${element.categoryId}')`;
    } else {
      console.error('Invalid categoryId:', element);
      return null; // Skip this entry or handle it differently
    }
  })
  .filter((element) => element !== null) // Filter out entries with invalid categoryId
  .join(', \n');
 
// //pakai join biar rapi

// console.log(carsValue)
// //map isi json
// const categoriesValue = parseCategories.map((element)=>{
//     //cek dulu table sesuai tidak
//     // return element.categoryName
//     //array
//     return `('${element.categoryName}')`
// }).join(', \n')
// //pakai join biar rapi

// console.log(categoriesValue)
// //buat pool query masukan ke DB table categories
// pool.query(` 
// INSERT INTO "Categories"("categoryName") 
// VALUES ${categoriesValue}
// `),
// (err,res)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(res)
//         console.log("created")
//         pool.end()
//     }
// }

// ///masukan cars di pool query
 pool.query(` 
INSERT INTO "Cars"("carName","price","licensePlate","year","categoryId")
VALUES ${carsValue}
`),
(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res)
        console.log("created")
        pool.end()
    }
}