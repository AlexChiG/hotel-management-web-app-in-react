import React, { useEffect, useState } from "react";

import "../css/tablePrinter.css";

// Functional component
const TablePrinter = ({ tableName }) => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const TABLE_NAME = tableName;

  useEffect(() => {
    fetch(`http://localhost:8081/get-columns/${TABLE_NAME}`)
      .then((res) => res.json())
      .then((result) => setColumns(result.columns))
      .catch((err) => console.log(err));

    // Fetch the data (assuming another endpoint provides the row data)
    fetch(`http://localhost:8081/get/${TABLE_NAME}`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  // const columns = columns;

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.replace("_", " ")}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              {columns.map((col, index) => (
                <td key={index}>
                  {col === "DATA_NASTERII"
                    ? new Date(d[col]).toLocaleDateString()
                    : d[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePrinter;
