import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes({ user }) {
  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoutes
