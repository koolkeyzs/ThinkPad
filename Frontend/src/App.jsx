import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetail'
import toast from 'react-hot-toast'
import RateLimitFlash from "./Components/rateLimiting";

const App = () => {
  return (
    
      <div> 

        <Routes>

        <Route path='/' element= {<HomePage/>}/>
        <Route path='/create' element= {<CreatePage/>}/>
        <Route path='/note/:id' element= {<NoteDetailPage/>}/>
      </Routes>
   
      </div>
  )
}

export default App