import { useState } from 'react'

function RoleManagement({ createdBy }) {
  const [roles, setRoles] = useState([])
  const [englishName, setEnglishName] = useState('')
  const [marathiName, setMarathiName] = useState('')
  const [description, setDescription] = useState('')
  const [idCounter, setIdCounter] = useState(1)

  const handleAddRole = (event) => {
    event.preventDefault()
    if (!englishName || !marathiName || !description) {
      return
    }

    const newRole = {
      id: `ROLE-${String(idCounter).padStart(3, '0')}`,
      englishName,
      marathiName,
      description,
      createdBy
    }

    setRoles((current) => [newRole, ...current])
    setIdCounter((current) => current + 1)
    setEnglishName('')
    setMarathiName('')
    setDescription('')
  }

  return (
    <div className="role-panel">
      <h3>Role Management</h3>
      <p>Use this panel to create a new role and review the role table.</p>

      <form onSubmit={handleAddRole}>
        <label>
          Role Name (English)
          <input
            value={englishName}
            onChange={(event) => setEnglishName(event.target.value)}
            placeholder="Enter role name in English"
          />
        </label>
        <label>
          Role Name (Marathi)
          <input
            value={marathiName}
            onChange={(event) => setMarathiName(event.target.value)}
            placeholder="रोलचे नाव"
          />
        </label>
        <label>
          Role Description
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Describe this role"
          />
        </label>
        <div className="button-row">
          <button type="submit" className="primary-button">
            Create Role
          </button>
        </div>
      </form>

      {roles.length === 0 ? (
        <p className="no-roles-text">No roles created yet. Add a role to see it appear here.</p>
      ) : (
        <table className="role-table">
          <thead>
            <tr>
              <th>Role ID</th>
              <th>English Name</th>
              <th>Marathi Name</th>
              <th>Description</th>
              <th>Created By</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.englishName}</td>
                <td>{role.marathiName}</td>
                <td>{role.description}</td>
                <td>{role.createdBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default RoleManagement;
