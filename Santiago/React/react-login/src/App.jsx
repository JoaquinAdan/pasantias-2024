import './styles/App.css'

import { Form } from '../components/Login'
import { Home } from '../components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ProtectedRoutes from '../routes/ProtectedRoutes'
import UnloggedRoutes from '../routes/UnloggedRoutes.jsx'

function App() {

  return (
    <main>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<UnloggedRoutes />}>
            <Route path='' element={<Form />} />
          </Route>

          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='home' element={<Home />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
