import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import './index.css'

function App() {

  // Navigate is used to redirect the route from one to other by making changes in the url.
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Navigate to = "/adminDashboard"></Navigate>}></Route> 
      <Route path = "/login" element={<Login />}></Route>
      <Route path = "/adminDashboard" element={<AdminDashboard />}></Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App
