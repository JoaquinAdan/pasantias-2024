import './App.css'
import { Form } from './Form'
import { About } from './About'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectedRoutes } from './ProtectedRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Form/>}/>
          <Route element={<ProtectedRoutes canActivate={true}/>}>
            <Route path='about' element={<About></About>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
