import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import {routes} from '../routes/router'

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route key={route.path} path={route.path} exact={route.exact} element={route.component}/>
            )}
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}

export default AppRouter