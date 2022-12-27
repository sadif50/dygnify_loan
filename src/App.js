import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllUser from './components/AllUser';
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
          path: '/allUser',
          element: <AllUser/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
