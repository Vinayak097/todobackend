import './App.css'

import Homedup from './components/HomeDup'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './components/HomeDup'
import { Dashboard } from './components/HomeDup'
function App() {
 

  return (
    <div>
      <div>
        <nav className='navs'>
          <a href="/">home</a>
          <a href="/dashboard">dashboard</a>
          <a href="/signup">signup</a>
        </nav>
      </div>
      <Routes >
        <Route path='/' element={<Homedup></Homedup>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
      
      
    </div>
  
  )
}



export default App
