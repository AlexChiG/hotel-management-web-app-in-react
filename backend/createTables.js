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
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('createTables Connected to MySQL database');
});

// Function to create a table
const createTables = (dataForCreate, callback) => {
  const tables = dataForCreate.tables;

  // Iterate over each table definition
  tables.forEach(({ tableName, schema }, index) => {
    const sql = `CREATE TABLE IF NOT EXISTS ${tableName} (${schema})`;

    // Execute the SQL query for creating the table
    db.query(sql, (err, result) => {
      if (err) {
        console.error(`Error creating table ${tableName}:`, err);
        // Return error if any table creation fails
        return callback(err);
      }
      console.log(`Table ${tableName} created successfully.`);
      
      // If all tables are successfully created, return success
      if (index === tables.length - 1) {
        return callback(null, result);
      }
    });
  });
};

module.exports = {
  createTables,
};