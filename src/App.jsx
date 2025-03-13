import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
