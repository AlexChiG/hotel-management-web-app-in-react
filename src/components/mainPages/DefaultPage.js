import React from "react";

import "../../css/mainPages/DefaultPage.css";

import AdminButtons from "../AdminButtons";

// Functional component
const DefaultPage = () => {
  return (
    <div id="defaultContent">
      <h1 className="indent">Welcome to HoteloHelp Management System</h1>

      <p className="indent">
        Your comprehensive solution for managing your hotel with ease and
        efficiency.
      </p>

      <p className="indent">Features:</p>
      <ul>
        <li>
          Room Management: Easily manage room bookings, availability, and rates.
        </li>
        <li>
          Guest Management: Keep track of guest information, preferences, and
          stay history.
        </li>
        <li>
          Reservations: Streamlined reservation system for seamless booking
          experiences.
        </li>
        <li>
          Billing & Invoicing: Automated billing and invoicing for hassle-free
          transactions.
        </li>
        <li>
          *Reports & Analytics: Gain insights with detailed reports and
          analytics.
        </li>
      </ul>
      <p className="indent">
        Get Started:
        <br />
        To begin, click on any of the tabs found on the sidebar to navigate to that section of our management system.
      </p>
      <AdminButtons></AdminButtons>
    </div>
  );
};

export default DefaultPage;
