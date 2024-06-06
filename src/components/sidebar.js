import React from "react";

import "../css/sidebar.css";

// Functional component
const sidebar = ({
  handleClientsClick,
  handleReservationsClick,
  handleRoomsClick,
  handleCashoutClick,
  handleWorkersClick,
}) => {
  return (
    <div id="sidebar">
      <button onClick={handleClientsClick}>Clients</button>
      <button onClick={handleReservationsClick}>Reservations</button>
      <button onClick={handleRoomsClick}>Rooms</button>
      <button onClick={handleCashoutClick}>Cashout</button>
      <button onClick={handleWorkersClick}>Workers (admin)</button>
    </div>
  );
};

export default sidebar;
