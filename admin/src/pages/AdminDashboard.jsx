import { useState } from 'react'
import Sidebar from '../modules/components/Sidebar'
import RoleManagement from '../modules/role/RoleManagement'

const menuItems = [
  "Role Management",
  "Office Management",
  "Employee Management",
  "Zone Management",
];

function AdminDashboard({ user, onLogout }) {
  const [activePage, setActivePage] = useState(menuItems[0]);

  const renderContent = () => {
    if (activePage === "Role Management") {
      return <RoleManagement createdBy={user.name} />;
    }

    return (
      <div className="placeholder-panel">
        <h3>{activePage}</h3>
      
      </div>
    );
  };

  return (
    <div className="dashboard-shell">
      <aside className="sidebar-shell">
        <div className="brand-box">
          <div className="brand-title">Admin Portal</div>
          <div className="brand-subtitle">{user.role}</div>
        </div>

        <Sidebar
          items={menuItems}
          activeItem={activePage}
          onSelect={setActivePage}
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

        <section className="dashboard-content">{renderContent()}</section>
      </main>
    </div>
  );
}

export default AdminDashboard;
