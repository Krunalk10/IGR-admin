import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import AdminDashboard from '../pages/AdminDashboard'
import HomePage from '../pages/HomePage'
import AddAdmin from '../pages/AddAdmin'
import Admin from '../pages/Admin'
import ProtectedRoutes from '../modules/components/ProtectedRoutes'

export default function AppRoutes({ user, onLogin, onCreateAdmin, onLogout, admins }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage user={user} />} />

      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <LoginPage onLogin={onLogin} onCreateAdmin={onCreateAdmin} />
          )
        }
      />

      <Route element={<ProtectedRoutes user={user} />}>
        <Route
          path="/dashboard"
          element={<AdminDashboard user={user} onLogout={onLogout} />}
        />
        <Route path="/add-admin" element={<AddAdmin onCreateAdmin={onCreateAdmin} />} />
        <Route path="/admin" element={<Admin admins={admins} />} />
      </Route>

      <Route path="*" element={<Navigate to={user ? '/dashboard' : '/login'} replace />} />
    </Routes>
  )
}
