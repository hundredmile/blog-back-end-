import React from 'react'
import {useRoutes,NavLink } from 'react-router-dom'
import routesarr from './routes'  // 引入路由表

export default function App() {
    const element = useRoutes(routesarr)
    return (
        <div>
            
            {element}
        </div>
    )
}
