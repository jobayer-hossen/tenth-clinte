import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import Login from '../pages/Login';
import Resister from '../pages/Resister';
import PrivateRoute from './PrivateRoute';
import Blog from '../pages/Blog';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element : <Main></Main>,
       
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader : () => fetch('https://tenth-assignment-server-emonhasan007.vercel.app/data')
            },
            ,
            {
                path:'/recipe/:id',
                element :<PrivateRoute><Recipe></Recipe></PrivateRoute>,
                loader: ({params}) => fetch(`https://tenth-assignment-server-emonhasan007.vercel.app/data/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/resister',
                element:<Resister></Resister>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }

]);

export default router;