import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import About from "./Components/Home/About/About";
import Blog from "./Components/Home/Blog/Blog";
import Services from "./Components/Home/Services/Services";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/blog" element={<Blog/>} ></Route>
        <Route path="/services" element={<Services/>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
