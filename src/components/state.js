const App = () => {
    // Data
    const usersData = [
      { id:1, name: '', username: '' },
      { id:2, name: '', username: '' },
      { id:3, name: '', username: '' },
    ]
    const initialFormState = { id: null, name: '', username: ''  }
  
    // Setting state
    const [users, setUsers] = useState(usersData)
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const [editing, setEditing] = useState(false)
  
    const addUser = user => {
      user.id = users.length + 1
      setUsers([...users, user])
    }
  
    const deleteUser = id => {
      setUsers(users.filter(user => user.id !== id))
    }
  
    const updateUser = (id, updatedUser) => {
      setEditing(false)
      setUsers(users.map(user => (user.id === id ? updatedUser: user)))
    }
  
    const editRow = user => {
      setEditing(true)
      setCurrentUser({id: user.id, name: user.name, username: user.username})
    }

    return (
        <div className="container">
         <h1>CRUD app wit hooks yo</h1>
         <div className="flex-row">
          <div className="flex-large">
            {editing ? (
            <>
              <h2>Edit user</h2>
              {/* <EditUserForm */}
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </>
        ) : (
            <>
              <h2>Add homie</h2>
              {/* <AddUserForm addUser={addUser} /> */}
            </>
        )}
          </div>
           <div className="flex-large">
            <h2>View homies</h2>
            {/* <UserTable users={users} editRow={editRow} deleteUser={deleteUser}  /> */}
           </div>
         </div>
        </div>
      )
        }