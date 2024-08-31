import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Findfree from './components/Findfree';
import Login from './components/Login';
import Findwork from './components/Findwork';
import './App.css'; // Ensure your CSS is correctly imported
import Signup from './components/Signup';
import Postproject from './components/Postproject';
import bg from './components/images/bg-1.jpg'
import Footer from './components/Footer'

// Layout Component


// Router Configuration




function App() {
    //  main div
    return <div className='w-[98vw] min-h-screen flex-col ' >
        {/* div for navbar dom */}
        <div>
            <Navbar />
        </div>
        
        {/* background immage div */}
        <main className='flex-grow'>
        <div className='-z-10 absolute -top-80'>
            <img src={bg} alt="" />
        </div>
        <div className='flex-grow'>

            <Routes>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="findwork" element={<Findwork />} />
                <Route path="findfreelancers" element={<Findfree />} />
                <Route path="signup" element={<Signup />} />
                <Route path="post-project" element={<Postproject />} />
            </Routes>

        </div>
        </main>
        {/* footer div below */}
        <Footer/>
        
    </div>



}

export default App;
