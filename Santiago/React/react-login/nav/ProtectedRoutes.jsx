import { Navigate, Outlet } from "react-router-dom";


export function ProtectedRoutes({canNavigate,alternativePath = window.location.pathname}){
    if(!canNavigate){
        return <Navigate to={alternativePath} replace/>
    }

    return <Outlet/>
}