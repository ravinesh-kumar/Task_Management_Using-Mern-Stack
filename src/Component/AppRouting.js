import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUP from './SignUP'
import Login from './Login'
import Home from './Home'

import TaskList from './Task/TaskList'
import AddTask from './Task/AddTask'
import UpdateTask from './Task/UpdateTask'
import UserList from './Task/UserList'

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<SignUP />} />
        <Route path='/home' element={localStorage.getItem("Login") ? <Home /> : <Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tasklist' element={localStorage.getItem("Login") ? <TaskList /> : <Login />} />
        <Route path='/taskadd' element={localStorage.getItem("Login") ? <AddTask /> : <Login />} />
        {/* <Route path='/updatetask/:_id' element={<UpdateTask />} /> */}
        <Route path='/api/task/:_id' element={localStorage.getItem("Login") ? <UpdateTask /> : <Login />} />
        {/* <Route path='/api/task/:_id' element={localStorage.getItem("Login") ? <UpdateTask /> : <Login />} /> */}
        <Route path='/userlist' element={ <UserList />} />


      </Routes>

    </BrowserRouter>
  )
}