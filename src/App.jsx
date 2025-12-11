
import './App.css'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Categoriesdata from './Categoriesmodule/component/categoriesData/categoriesdata'
import Categorieslist from './Categoriesmodule/component/categorieslist/categorieslist'
import Recipelist from './Recipemodule/component/Recipeslist/recipelist'
import Recipedata from './Recipemodule/component/RecipeData/recipedata'
import Authlayout from './shared/component/Authlayout/Authlayout'
import Deleteconfirm from './shared/component/DeleteConformation/deleteconfirmation'
import Navbar from './shared/component/Navbar/navbar'
import Navdata from './shared/component/Navdata/navdata'
import Notfound from './shared/component/Notfound/notfound'
import Sidebar from './shared/component/sidebar/sidebar'
import Userlist from './Usermodule/component/userlist/userlist'
import Changepass from './Authmodule/component/changepass/changepass'
import Forgetpass from './Authmodule/component/forgetpass/forgetpass'
import Login from './Authmodule/component/login/login'
import Register from './Authmodule/component/Register/register'
import Verify from './Authmodule/component/verfiyaccount/verify'
import Resetpass from './Authmodule/component/Resetpass/resetpass'
import { ToastContainer } from 'react-toastify';



function App() {
  const routes = createBrowserRouter([
    {
      path:'',
      element:<Authlayout/>,
      errorElement:<Notfound/>,
      children:[
        {index:true,element:<Login/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>},
        {path:'verify',element:<Verify/>},
        {path:'resetpass',element:<Resetpass/>},
        {path:'forgetpass',element:<Forgetpass/>},
        {path:'changepass',element:<Changepass/>},
      ]
    },

  ])

  return (
     <>
       <RouterProvider router={routes}></RouterProvider>
       <ToastContainer />
      
     </>
  )
}

export default App;
