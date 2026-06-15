import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddAdmin({ onCreateAdmin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !password) {
      setMessage('Please fill in all fields to create a new admin.')
      return
    }

    onCreateAdmin({ name: name.trim(), email: email.trim(), password })
    setMessage(`Admin ${name.trim()} was created successfully.`)
    setName('')
    setEmail('')
    setPassword('')
    navigate('/dashboard')
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <h1>Add New Admin</h1>
        <p>Create a new local admin account and return to the dashboard.</p>
      </header>

      <form className="form-card" onSubmit={handleSubmit}>
        <label>
          Admin name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Admin name"
          />
        </label>

        <label>
          Email address
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="admin@example.com"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
        </label>

        <button type="submit" className="primary-button">
          Create Admin
        </button>

        {message && <div className="message-box">{message}</div>}
      </form>
    </div>
  )
}

export default AddAdmin
