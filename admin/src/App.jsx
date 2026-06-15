import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'

const initialAdmins = [
  {
    email: 'super@admin.com',
    password: 'superpass',
    name: 'Super Admin',
    role: 'Super Admin'
  },
  {
    email: 'admin@admin.com',
    password: 'adminpass',
    name: 'Admin User',
    role: 'Admin'
  }
]

function App() {
  const [user, setUser] = useState(null)
  const [admins, setAdmins] = useState(initialAdmins)

  const handleLogin = (email, password) => {
    const found = admins.find((admin) => admin.email === email && admin.password === password)
    if (found) {
      setUser(found)
      return true
    }
    return false
  }

  const handleCreateAdmin = (adminData) => {
    setAdmins((current) => [
      ...current,
      {
        ...adminData,
        role: 'Admin'
      }
    ])
  }

  const handleLogout = () => setUser(null)

  return (
    <div className="app-root">
      <AppRoutes
        user={user}
        admins={admins}
        onLogin={handleLogin}
        onCreateAdmin={handleCreateAdmin}
        onLogout={handleLogout}
      />
    </div>
  )
}

export default App
