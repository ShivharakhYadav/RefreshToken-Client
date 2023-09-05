import React from 'react';
import Login from './Login';
import { ToastContainer, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  console.log("prr", process.env.REACT_APP_BASE_URL)
  return (
    <div>
      <Login />
      <ToastContainer />
    </div>
  );
}

export default App;
