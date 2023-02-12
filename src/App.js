import React from "react";

// reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';
import Navbar from "./components/pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
