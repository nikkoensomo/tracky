import './App.css'

import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner';
import LandingPage from './pages/LandingPage'

import DashboardLayout from './layouts/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import AccountsPage from './pages/AccountsPage'
import TransactionsPage from './pages/TransactionsPage'
import CategoriesPage from './pages/CategoriesPage'
import SettingsPage from './pages/SettingsPage'
import HelpPage from './pages/HelpPage'
import ProtectedRoute from './components/routes/ProtectedRoute'

function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage /> } />

        <Route path="/dashboard-page" element={ 
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<DashboardPage />} />
          <Route path="accounts-page" element={<AccountsPage /> } />
          <Route path="transactions-page" element={<TransactionsPage /> } />
          <Route path="categories-page" element={<CategoriesPage /> } />
          <Route path="settings-page" element={<SettingsPage /> } />
          <Route path="help-page" element={<HelpPage /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
