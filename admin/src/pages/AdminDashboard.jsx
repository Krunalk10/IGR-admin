import { useState } from 'react'
import Sidebar from '../modules/components/Sidebar'
import RoleManagement from '../modules/role/RoleManagement'

const menuItems = [
  'Role Management',
  'Office Management',
  'Employee Management',
  'Zone Management'
]

function AdminDashboard({ user, onLogout }) {
  const [activeSection, setActiveSection] = useState(menuItems[0])

  return (
    <div className="dashboard-shell">
      <aside className="sidebar-shell">
        <div className="brand-box">
          <div className="brand-title">Admin Portal</div>
          <div className="brand-subtitle">{user.role}</div>
        </div>
        <Sidebar
          items={menuItems}
          activeItem={activeSection}
          onSelect={setActiveSection}
        />
        <button type="button" className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <div>
            <p className="small-label">Logged in as</p>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          <div className="status-pill">{user.role}</div>
        </div>

        <div className="dashboard-grid">
          {menuItems.map((item) => (
            <div
              key={item}
              className={`dashboard-card ${item === activeSection ? 'active-card' : ''}`}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </div>
          ))}
        </div>

        <section className="dashboard-content">
          {activeSection === 'Role Management' ? (
            <RoleManagement createdBy={user.name} />
          ) : (
            <div className="placeholder-panel">
              <h3>{activeSection}</h3>
              <p>
                This section will show the {activeSection.toLowerCase()} fields and details.
                For now, role management is implemented in this admin UI.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default AdminDashboard;
