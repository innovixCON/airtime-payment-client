import Navbar from "./components/NavBar";
import Home from './pages/Home';
import About from "./pages/about"
import Login from "./pages/login"
import Services from "./pages/services";
import Footer from "./components/footer";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/signup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactUS" element={<ContactUs/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;