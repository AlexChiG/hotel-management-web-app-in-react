import React from "react";

// Functional component
const AdminButtons = () => {
  const handleCreate = () => {
    const dataForCreate = {
      tables: [
        {
          tableName: "functii",
          schema:
            "ID_FUNCTIE INT AUTO_INCREMENT PRIMARY KEY, NUME_FUNCTIE VARCHAR(255), SALARIU DECIMAL(10, 2)",
        },
        {
          tableName: "angajati",
          schema:
            "ID_ANGAJAT INT AUTO_INCREMENT PRIMARY KEY, NUME VARCHAR(255), PRENUME VARCHAR(255), CNP CHAR(13), DATA_NASTERII DATE, TELEFON VARCHAR(20), ADRESA VARCHAR(255), ID_FUNCTIE INT, FOREIGN KEY (ID_FUNCTIE) REFERENCES functii(ID_FUNCTIE)",
        },
        {
          tableName: "clienti",
          schema:
            "ID_CLIENT INT AUTO_INCREMENT PRIMARY KEY, NUME VARCHAR(255), PRENUME VARCHAR(255), CNP CHAR(13), DATA_NASTERII DATE, TELEFON VARCHAR(20), ADRESA VARCHAR(255)",
        },
        {
          tableName: "camere",
          schema:
            "ID_CAMERE INT AUTO_INCREMENT PRIMARY KEY, TIP_CAMERA VARCHAR(255), NR_PATURI INT",
        },
        {
          tableName: "rezervari",
          schema:
            "ID_REZERVARE INT AUTO_INCREMENT PRIMARY KEY, DATA DATE, NR_ZILE INT, ID_CLIENTI INT, ID_CAMERE INT, FOREIGN KEY (ID_CLIENTI) REFERENCES clienti(ID_CLIENT), FOREIGN KEY (ID_CAMERE) REFERENCES camere(ID_CAMERE)",
        },
      ],
    };

    fetch("http://localhost:8081/create-table", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForCreate),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create table");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message); // Table created successfully
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleUpload = () => {
    
  }
  const handleDrop = () => {
    const dataForDrop = {
      tables: [
        {
          tableName: "functii",
        },
        {
          tableName: "angajati",
        },
        {
          tableName: "clienti",
        },
        {
          tableName: "camere",
        },
        {
          tableName: "rezervari",
        },
      ],
    };

    fetch("http://localhost:8081/drop-table", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForDrop),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to drop tables");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message); // Tables dropped successfully
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <p>Use the following buttons to alter the database:</p>
      <button onClick={handleCreate} >Create Tables</button>
      <button onClick={handleUpload} disabled>Upload Dummy Data</button>
      <button onClick={handleDrop} disabled>Drop Tables</button>
    </div>
  );
};

export default AdminButtons;
