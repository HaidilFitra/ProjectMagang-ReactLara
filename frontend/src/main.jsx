import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/homepage.jsx'
import VisiMisi from './pages/VisiMisi.jsx'
import Berita from './pages/berita.jsx'
import { Admin } from './admin/index.jsx'
import Create from './admin/create.jsx'
import { EditBerita } from './admin/edit.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/visimisi",
    element:<VisiMisi/>
  },
  {
    path:"/berita",
    element:<Berita/>
  },
  {
    path:"/create/berita",
    element:<Create/>
  },
  {
    path:"/edit/berita/:id",
    element:<EditBerita/>
  },
  {
    path:"/admin",
    element:<Admin/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
