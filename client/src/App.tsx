import './App.css'

import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

import DashboardLayout from './layouts/DashboardLayout'
import DashboardPage from './pages/DashboardPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage /> } />

        <Route path="/dashboard-page" element={<DashboardLayout /> }>
          <Route index element={<DashboardPage />}>

          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
