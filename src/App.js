import React, { useState } from 'react';
import './App.css';
//import Login from './components/Login';
import firebase from './firebase'
//import Home from './components/Home';
import Form from './components/Form'

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

  
  //     state = {
  //     hoursWorked: "",
  //     username: "",
  //     items: []
  //   };


  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const itemsRef = firebase.database().ref('items');
  //   const item = {
  //     title: this.state.hoursWorked,
  //     user: this.state.username
  //   }
  //   itemsRef.push(item);
  //   this.setState({
  //     hoursWorked: '',
  //     username: ''
  //   });
  // }

  // componentDidMount() {
  //   const itemsRef = firebase.database().ref('items');
  //   itemsRef.on('value', (snapshot) => {
  //     let items = snapshot.val();
  //     let newState = [];
  //     for (let item in items) {
  //       newState.push({
  //         id: item,
  //         title: items[item].title,
  //         user: items[item].user
  //       });
  //     }
  //     this.setState({
  //       items: newState
  //     });
  //   });
  // }

  // removeItem = (itemId) => {
  //   const itemRef = firebase.database().ref(`/items/${itemId}`);
  //   itemRef.remove();
  // }
  // render() {

    //console.log(this.state)
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


//     return (
// <div>
// <form>            
//   <div class="form-group">
//     <label for="exampleInputEmail1">Login</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <button type="submit" class="btn btn-primary mb-2">User Login</button>
//   <br></br><br></br><br></br><br></br>
// </form>
// <Form />
// </div>



//     );
  //}
}
 
 export default App;