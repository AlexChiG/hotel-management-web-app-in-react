const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const { createTables } = require("./createTables"); // Import the createTables function
const { dropTable } = require("./dropTable");

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "licenta",
});

// Endpoint to drop a table
app.post("/drop-table", (req, res) => {
  // Assuming the request contains the table name in the request body
  const dataForDrop = req.body;

  dropTable(dataForDrop, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to drop table" });
    }
    return res.status(200).json({ message: "Table dropped successfully" });
  });
});

app.get("/get/:table", (req, res) => {
  const { table } = req.params;
  db.query("SELECT * FROM ??", [table], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/get-columns/:table", (req, res) => {
  const { table } = req.params;

  db.query("SHOW COLUMNS FROM ??", [table], (err, data) => {
    if (err) {
      return res.json(err);
    }
    const columnNames = data.map((column) => column.Field);
    return res.json({ columns: columnNames });
  });
});

app.post("/create-table", (req, res) => {
  const dataForCreate = req.body;

  createTables(dataForCreate, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to create tables" });
    }
    return res.status(200).json({ message: "Tables created successfully" });
  });
});

app.get("/", (req, res) => {
  return res.json("from backend side");
});

// Other endpoints and configurations...

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
