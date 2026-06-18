import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Presentation from './components/Presentation.jsx'
import Forum from './components/Forum.jsx'
import Invitation from './components/Invitation.jsx'
import Program from './components/Program.jsx'
import InfoMaterials from './components/InfoMaterials.jsx'
import Budget from './components/Budget.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/gh-pages">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/program" element={<Program />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/info-materials" element={<InfoMaterials />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
