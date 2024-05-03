import React, {useEffect} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import ReactGA from 'react-ga';
ReactGA.initialize("G-E2H1N8ZPH0");

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
return(<>
<Router>
    <Navbar/>
  <Routes>
    <Route exact path="/" element={<Homepage/>}></Route>
    <Route exact path="/Portfolio" element={<Portfolio/>}></Route>
    <Route exact path="/Footer" element={<Footer/>}></Route>
   

  
  </Routes>
    <Footer/>
</Router>
</>)

}

export default App;
