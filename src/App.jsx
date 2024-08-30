import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Findfree from './components/Findfree';
import Login from './components/Login';
import Findwork from './components/Findwork';
import './App.css'; // Ensure your CSS is correctly imported
import Signup from './components/Signup';

// Layout Component


// Router Configuration

   


function App() {
  return <div className='w-screen h-screen' >
    
    <Navbar/>
     <div className='w-full h-full relative'>

    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="findwork" element={<Findwork />} />
      <Route path="findfreelancers" element={<Findfree />} />
    </Routes>
     </div>
  </div>
  

}


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "login",
//     element: <Login />,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

export default App;
