import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useProductStates } from "./Components/utils/global.context";
import "./index.css";

function App() {
  const { state } = useProductStates();

  return (
    <div className={`App ${state.darkMode ? "dark" : "light"}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/dentist/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
