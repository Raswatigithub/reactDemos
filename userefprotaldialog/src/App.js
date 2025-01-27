import React, { Fragment, useState } from 'react'
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';



function App() {
  const [userList,setUserList]=useState([])
  const addUserHandler=(uName,uAge)=>{
    setUserList(preUsersList=>[
        ...preUsersList,
        {
          name:uName,
          age:uAge,
          id:Math.round(Math.random()*9999).toString()
        },
      ])
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </Fragment>
   
  )
  }

export default App;
