import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";

function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          color: "#3a3a3a",
          fontWeight: "bold",
          background: "none",
          border: "none",
          fontSize: "15px",
          position: "absolute",
          right: "3px",
          top: "3px",
          cursor: "pointer",
          outline: "none",
        }}
        aria-label="Close"
        onClick={(e) => {
          console.log("Close button has been clicked");
        }}
      >
        <img
          src={closeIcon}
          // src="../assets/close-icon.png"
          alt="close icon"
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
