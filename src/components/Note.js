import React from "react";

function Note(prop) {
  return (
    <div className="note">
      <h1>{prop.heading}</h1>
      <p>{prop.para}</p>
    </div>
  );
}

export default Note;
