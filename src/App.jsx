import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./screens/About";
import BioMedical from "./screens/BioMedical";
import Software from "./screens/Software";
import Finance from "./screens/Finance";
import Contact from "./screens/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/finance" element={<Finance />} />
          <Route path="/service/software" element={<Software />} />
          <Route path="/service/bio" element={<BioMedical />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
