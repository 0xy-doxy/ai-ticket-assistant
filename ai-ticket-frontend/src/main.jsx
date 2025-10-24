import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import CheckAauth from './components/check-auth'
import TicketDetailsPage from './pages/ticket'
import Tickets from './pages/tickets'
import Login from './pages/login'
import Signup from './pages/signup'
import Admin from './pages/admin'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
    <Route
    path='/'
    element={
      <CheckAauth protected={true}>
        <Tickets/>
      </CheckAauth>
    }
    
    />
    <Route
    path='/tickets/:id'
    element={
      <CheckAauth protected={true}>
        <TicketDetailsPage/>
      </CheckAauth>
    }
    
    />
    <Route
    path='/login'
    element={
      <CheckAauth protected={false}>
        <Login/>
      </CheckAauth>
    }
    
    />
    <Route
    path='/signup'
    element={
      <CheckAauth protected={false}>
        <Signup/>
      </CheckAauth>
    }
    
    />
    <Route
    path='/admin'
    element={
      <CheckAauth protected={true}>
        <Admin/>
      </CheckAauth>
    }
    
    />
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
