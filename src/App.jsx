import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/dentist/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
