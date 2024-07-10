import { Navigate, Outlet } from "react-router-dom"

export function ProtectedRoutes({canActivate,redirectPath='/'}){
    
    if(!canActivate){
        return <Navigate to={redirectPath} replace/>
    }

    return <Outlet/>
}