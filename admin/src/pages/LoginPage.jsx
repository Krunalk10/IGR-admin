import { useState } from 'react'

function LoginPage({ onLogin, onCreateAdmin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [showCreate, setShowCreate] = useState(false)
  const [adminName, setAdminName] = useState('')
  const [adminEmail, setAdminEmail] = useState('')
  const [adminPassword, setAdminPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const success = onLogin(email.trim(), password)
    if (!success) {
      setMessage('Invalid admin credentials. Use super@admin.com or admin@admin.com.')
    }
  }

  const handleCreate = (event) => {
    event.preventDefault()
    if (!adminName || !adminEmail || !adminPassword) {
      setMessage('Please fill all admin fields.')
      return
    }
    onCreateAdmin({ name: adminName.trim(), email: adminEmail.trim(), password: adminPassword })
    setMessage(`New admin ${adminName} created locally.`)
    setAdminName('')
    setAdminEmail('')
    setAdminPassword('')
    setShowCreate(false)
  }

  return (
    <div className="app-shell">
      <div className="login-card">
        <div className="login-header">
          <h1>Admin Login</h1>
          <p>Use your admin credentials to log in.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@admin.com"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
            />
          </label>
          <button type="submit" className="primary-button">
            Login
          </button>
        </form>

        <div className="login-footer">
          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              setShowCreate((value) => !value)
              setMessage('')
            }}
          >
            {showCreate ? 'Hide Add Admin' : 'Add New Admin'}
          </button>
        </div>

        {showCreate && (
          <form className="create-admin-form" onSubmit={handleCreate}>
            <label>
              Admin Name
              <input
                type="text"
                value={adminName}
                onChange={(event) => setAdminName(event.target.value)}
                placeholder="Admin name"
              />
            </label>
            <label>
              Admin Email
              <input
                type="email"
                value={adminEmail}
                onChange={(event) => setAdminEmail(event.target.value)}
                placeholder="newadmin@admin.com"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={adminPassword}
                onChange={(event) => setAdminPassword(event.target.value)}
                placeholder="new password"
              />
            </label>
            <button type="submit" className="primary-button">
              Save New Admin
            </button>
          </form>
        )}

        {message && <div className="message-box">{message}</div>}

        <div className="hint-box">
          {/* <p>Default admins:</p>
          <p>Super Admin: super@admin.com / superpass</p>
          <p>Admin: admin@admin.com / adminpass</p> */}
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
