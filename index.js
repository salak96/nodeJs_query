const [command,id] = process.argv.slice(2);
const pool = require('./connection');
console.log(command);

switch (command) {
  case "show":
    try {
      pool.query('SELECT * FROM "Cars"', (err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log(res.rows); // Menampilkan hasil query sebagai array objek
        }
        pool.end();
      });
    } catch (err) {
      console.error(err);
    }
    break;
  case "destroy":
    pool.query(`DELETE FROM "Cars"
    WHERE "id" = ${id}
    `, (err, res) => {
        if(err){
            console.log(err);
        }else{
            console.log(res.rows);
        }
        pool.end()
    })
    break;
  default:
    console.log("Command tidak dikenali");
    break;
}
