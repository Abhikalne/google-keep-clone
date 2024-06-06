import React from "react";
import Header from "./components/Header/Header";
import Count from "./components/Count/Count";
import Notes from "./components/Notes/Notes";
import CreateNote from "./components/CreateNote/CreateNote";

function App() {
  return (
    <div className="App">
      <Header />
      <Count />
      <CreateNote />
      <Notes />
      
    </div>
  );
}

export default App;
