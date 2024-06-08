import React from "react";

function Contact2({ icon, title, info }) {
  return (
    <div className="contact2">
      <div className="icon-container">{icon}</div>
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  );
}

export default Contact2;
