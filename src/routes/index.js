import {lazy,Suspense } from 'react'

const Login = lazy(() => import('../Pages/Login'));
const Home = lazy(() => import('../Pages/Home'));

let routesArr = [
    {
        path:"/",
        element:<Suspense><Login/></Suspense>
    },
    {
        path:"/home",
        element:<Suspense><Home/></Suspense>
    },
]

export default routesArr