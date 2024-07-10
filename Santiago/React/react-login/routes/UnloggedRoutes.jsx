import { Navigate, Outlet } from 'react-router-dom'

const UnloggedRoutes = () => {
  const token = localStorage.getItem('token')
  if (token) return <Navigate to='/home' replace />

  return <Outlet/>
}

export default UnloggedRoutes