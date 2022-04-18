import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import About from "./Components/Home/About/About";
import Blog from "./Components/Home/Blog/Blog";
import Services from "./Components/Home/Services/Services";
import Portfolio from './Components/Home/Portfolio/Portfolio';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Error404 from './Components/404/404';
import ServiceDetails from './Components/Home/ServiceDetails/ServiceDetails';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import CheckOut from './Components/CheckOut/CheckOut';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/blog" element={<Blog/>} ></Route>
        <Route path="/portfolio" element={<Portfolio/>} ></Route>
        <Route path="/services" element={<Services/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/register" element={<Register/>} ></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails/>}></Route>
        <Route path='/service/:serviceId/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<Error404/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
