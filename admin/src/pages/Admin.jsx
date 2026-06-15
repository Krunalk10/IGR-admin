import { Link } from 'react-router-dom'

function Admin({ admins = [] }) {
  return (
    <div className="page-shell">
      <header className="page-header">
        <h1>Admin Accounts</h1>
        <p>Review the current admin user list.</p>
      </header>

      <div className="page-actions">
        <Link to="/dashboard" className="secondary-button">
          Back to Dashboard
        </Link>
      </div>

      <div className="admin-grid">
        {admins.length ? (
          admins.map((admin) => (
            <div key={admin.email} className="admin-card">
              <h3>{admin.name}</h3>
              <p>{admin.email}</p>
              <span className="badge">{admin.role}</span>
            </div>
          ))
        ) : (
          <p>No admin accounts are available.</p>
        )}
      </div>
    </div>
  )
}

export default Admin
