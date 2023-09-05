import React from 'react';
import Login from './Login';
import { ToastContainer, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import UserList from './UserList';
function App() {
  console.log("prr", process.env.REACT_APP_BASE_URL)
  return (
    <div>
      {/* <Login /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
        <Route path='/dashboard' element={<UserList />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
