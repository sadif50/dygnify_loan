import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllUser from './components/AllUser';
import ApplicationDetails from './components/ApplicationDetails';
import Home from './components/Home';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/allApplications',
          element: <AllUser/>
        },
        {
          path: '/allApplications/:id',
          loader: ({params})=>fetch(`http://localhost:5000/applications?id=${params.id}`),
          element: <ApplicationDetails/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
