import React from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>MY TODOS</h1>
      <Todo text="learn" time="now" finish="never" />
      <Todo text="fuck" time="everyday" finish="morning" />
      <Todo text="eat" time="little" finish="fast" />
    </div>
  );
}

export default App;
