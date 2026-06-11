import { useMemo, useState } from 'react'

const initialRoles = [
  {
    id: 'ROLE_001',
    nameEn: 'Admin',
    nameMr: 'प्रशासक',
    description: 'Can manage users and system settings.',
    status: true,
    createdBy: 'Super Admin',
  },
  {
    id: 'ROLE_002',
    nameEn: 'Employee',
    nameMr: 'कर्मचारी',
    description: 'Can view data and perform employee tasks.',
    status: true,
    createdBy: 'Admin User',
  },
]

const menuItems = [
  'Role Management',
  'Office Management',
  'Employee Management',
  'Zone Management',
]

function RoleManagement({ createdBy }) {
  const [roles, setRoles] = useState(initialRoles)
  const [searchText, setSearchText] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [englishName, setEnglishName] = useState('')
  const [marathiName, setMarathiName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState(true)

  const filteredRoles = useMemo(() => {
    const query = searchText.trim().toLowerCase()
    if (!query) {
      return roles
    }

    return roles.filter((role) => {
      return [role.id, role.nameEn, role.nameMr, role.description]
        .join(' ')
        .toLowerCase()
        .includes(query)
    })
  }, [roles, searchText])

  const handleSaveRole = (event) => {
    event.preventDefault()

    if (!englishName.trim() || !marathiName.trim() || !description.trim()) {
      return
    }

    const nextId = `ROLE_${String(roles.length + 1).padStart(3, '0')}`
    const newRole = {
      id: nextId,
      nameEn: englishName.trim(),
      nameMr: marathiName.trim(),
      description: description.trim(),
      status,
      createdBy,
    }

    setRoles((current) => [...current, newRole])
    setSearchText('')
    setEnglishName('')
    setMarathiName('')
    setDescription('')
    setStatus(true)
    setShowCreateForm(false)
  }

  const handleReset = () => {
    setEnglishName('')
    setMarathiName('')
    setDescription('')
    setStatus(true)
  }

  const handleCancel = () => {
    setShowCreateForm(false)
    handleReset()
  }

  return (
    <div className="role-management-shell ai-style-change-4">
      {/* <aside className="role-menu-panel">
        <div className="role-menu-title">Management</div>
        <nav className="role-menu-list">
          {menuItems.map((item) => (
            <button key={item} type="button" className="role-menu-item">
              {item}
            </button>
          ))}
        </nav>
      </aside> */}

      <section className="role-content-panel ai-style-change-1">
        <div className="role-top-bar">
          <div>
            <h2>Role Management</h2>
            <p>Search and manage roles created by admin or super admin.</p>
          </div>
          <button
            type="button"
            className="primary-button"
            onClick={() => setShowCreateForm(true)}
          >
            Add Role
          </button>
        </div>

        <div className="role-search-box">
          <input
            type="search"
            placeholder="Search roles by id, English name, Marathi name or description"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>

        <div className="role-table-card">
          <table className="role-table">
            <thead>
              <tr>
                <th>Role ID</th>
                <th>Role Name (English)</th>
                <th>Role Name (Marathi)</th>
                <th>Role Description</th>
                <th>Status</th>
                <th>Created By</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoles.length > 0 ? (
                filteredRoles.map((role) => (
                  <tr key={role.id}>
                    <td>{role.id}</td>
                    <td>{role.nameEn}</td>
                    <td>{role.nameMr}</td>
                    <td>{role.description}</td>
                    <td>
                      <span className={`status-pill ${role.status ? 'active' : 'inactive'}`}>
                        {role.status ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>{role.createdBy}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="empty-state">
                    No roles found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {showCreateForm && (
          <div className="create-role-card">
            <div className="create-role-header">
              <div>
                <h3>Create Role</h3>
                <p>Fill in the role details and save to add it to the table.</p>
              </div>
            </div>
            <form className="create-role-form" onSubmit={handleSaveRole}>
              <div className="form-row">
                <label>
                  Role Name (English)
                  <input
                    value={englishName}
                    onChange={(event) => setEnglishName(event.target.value)}
                    placeholder="Enter role name in English"
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Role Name (Marathi)
                  <input
                    value={marathiName}
                    onChange={(event) => setMarathiName(event.target.value)}
                    placeholder="रोलचे नाव प्रविष्ट करा"
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Created By
                  <input value={createdBy} readOnly />
                </label>
              </div>

              <div className="form-row switch-row">
                <label>Status</label>
                <div className="switch-control">
                  <span className={`status-pill ${status ? 'active' : 'inactive'}`}>
                    {status ? 'Active' : 'Inactive'}
                  </span>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={status}
                      onChange={() => setStatus((current) => !current)}
                    />
                    <span className="toggle-slider" />
                  </label>
                </div>
              </div>

              <div className="form-row">
                <label>
                  Role Description
                  <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Enter role description"
                    rows={4}
                  />
                </label>
              </div>

              <div className="form-actions">
                <button type="button" className="secondary-button" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="button" className="secondary-button" onClick={handleReset}>
                  Reset
                </button>
                <button type="submit" className="primary-button">
                  Save Role
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  )
}

export default RoleManagement;
