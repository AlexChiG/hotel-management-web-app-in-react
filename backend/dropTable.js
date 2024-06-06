const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "licenta",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("dropTable Connected to MySQL database");
});

// Function to drop a table
const dropTable = (dataForDrop, callback) => {
  const tables = dataForDrop.tables;

  // Iterate over each table definition
  tables.forEach(({ tableName }, index) => {
    const sql = `DROP TABLE IF EXISTS ${tableName}`;

    db.query(sql, (err, result) => {
      if (err) {
        console.error(`Error dropping table: ${tableName}`, err);
        return callback(err);
      }
      console.log(`Table ${tableName} dropped successfully:`);
      if (index === tables.length - 1) {
        return callback(null, result);
      }
    });
  });
};

module.exports = {
  dropTable,
};
