import React, { useState } from "react";

import "./css/App.css";

// import AdminButtons from "./components/AdminButtons";
// import TablePrinter from "./components/TablePrinter";
import Sidebar from "./components/sidebar";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";

import DefaultPage from "./components/mainPages/DefaultPage";
import Cashout from "./components/mainPages/Cashout";
import Clients from "./components/mainPages/Clients";
import Reservations from "./components/mainPages/Reservations";
import Rooms from "./components/mainPages/Rooms";
import Workers from "./components/mainPages/Workers";



function App() {
  const [defaultVisibility, setDefaultVisibility] = useState(true);
  const [cashoutVisibility, setCashoutVisibility] = useState(false);
  const [clientsVisibility, setClientsVisibility] = useState(false);
  const [reservationsVisibility, setReservationsVisibility] = useState(false);
  const [roomsVisibility, setRoomsVisibility] = useState(false);
  const [workersVisibility, setWorkersVisibility] = useState(false);

  const handleHomeClick = () => {
    setDefaultVisibility(true);
    setCashoutVisibility(false);
    setClientsVisibility(false);
    setReservationsVisibility(false);
    setRoomsVisibility(false);
    setWorkersVisibility(false);
  };

  const handleCashoutClick = () => {
    setDefaultVisibility(false);
    setCashoutVisibility(true);
    setClientsVisibility(false);
    setReservationsVisibility(false);
    setRoomsVisibility(false);
    setWorkersVisibility(false);
  };
  const handleClientsClick = () => {
    setDefaultVisibility(false);
    setCashoutVisibility(false);
    setClientsVisibility(true);
    setReservationsVisibility(false);
    setRoomsVisibility(false);
    setWorkersVisibility(false);
  };
  const handleReservationsClick = () => {
    setDefaultVisibility(false);
    setCashoutVisibility(false);
    setClientsVisibility(false);
    setReservationsVisibility(true);
    setRoomsVisibility(false);
    setWorkersVisibility(false);
  };
  const handleRoomsClick = () => {
    setDefaultVisibility(false);
    setCashoutVisibility(false);
    setClientsVisibility(false);
    setReservationsVisibility(false);
    setRoomsVisibility(true);
    setWorkersVisibility(false);
  };
  const handleWorkersClick = () => {
    setDefaultVisibility(false);
    setCashoutVisibility(false);
    setClientsVisibility(false);
    setReservationsVisibility(false);
    setRoomsVisibility(false);
    setWorkersVisibility(true);
  };

  return (
    <div id="page">
      {/* <div id="main">main content</div> */}
      {/* <AdminButtons></AdminButtons> */}
      {/* <TablePrinter /> */}
      <PageHeader handleHomeClick={handleHomeClick} />
      <Sidebar
        handleClientsClick={handleClientsClick}
        handleReservationsClick={handleReservationsClick}
        handleRoomsClick={handleRoomsClick}
        handleCashoutClick={handleCashoutClick}
        handleWorkersClick={handleWorkersClick}
      />
      {defaultVisibility && <DefaultPage />}
      {cashoutVisibility && <Cashout />}
      {clientsVisibility && <Clients />}
      {reservationsVisibility && <Reservations />}
      {roomsVisibility && <Rooms />}
      {workersVisibility && <Workers />}
      <PageFooter></PageFooter>
    </div>
  );
}

export default App;
