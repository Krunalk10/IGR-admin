import { Link } from 'react-router-dom'

function HomePage({ user }) {
  return (
    <div className="page-shell">
      <header className="page-header">
        <h1>Admin Portal</h1>
        <p>Welcome to the admin portal. Log in to manage admins, roles, and the dashboard.</p>
      </header>

      <div className="page-actions">
        {user ? (
          <Link to="/dashboard" className="primary-button">
            Go to Dashboard
          </Link>
        ) : (
          <Link to="/login" className="primary-button">
            Login
          </Link>
        )}

        <Link to="/admin" className="secondary-button">
          View Admin List
        </Link>
      </div>
    </div>
  )
}

export default HomePage
