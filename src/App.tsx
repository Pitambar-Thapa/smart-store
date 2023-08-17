import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/shared/navbar';
import logo from './logo.svg';
import './App.css';
import DashBoard from './components/dashboard/dashboard';
import Report from './components/report/report';
import Billing from './components/billing/billing';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';


function App() {
  return (
    <>
      <main className='container'>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route index Component={DashBoard } />
          <Route path="report" Component = {Report} />
          <Route path="billing" Component = {Billing} />
        </Routes>
      </BrowserRouter>
      </main>
    </>
  );
}

export default App;
