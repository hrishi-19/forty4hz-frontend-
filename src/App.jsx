
import './App.css'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import Task from './pages/task'
import AddTask from './pages/addTask'
import ErrPage from './pages/errPage'

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
      <Route  exact path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/task/:tid' element={<Task/>}/>
      <Route path='/task/add' element={<AddTask/>}/>
      <Route path="*" element={<ErrPage/>}/>
      </Routes>
      </div>
    
  )
}

export default App
