import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes"

function App() {
  return (
    <div>
      <Header />
      {Notes.map((Props) => {
        return (
          <Note 
          heading={Props.title} 
          para={Props.content}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
