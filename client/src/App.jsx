import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewControllers from './pages/ViewControllers'
import EditController from './pages/EditController'
import CreateController from './pages/CreateController'
import ControllerDetails from './pages/ControllerDetails'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateController title='Controller Forge | Customize' />
    },
    {
      path:'/customcars',
     element: <ViewControllers title='Controller Forge | Controllers' />
    },
    {
      path: '/customcars/:id',
      element: <ControllerDetails title='Controller Forge | View' />
    },
    {
      path: '/edit/:id',
      element: <EditController title='Controller Forge | Edit' />
    }
  ])

  return (
    <div className='app'>

      <Navigation />

      { element }

    </div>
  )
}

export default App