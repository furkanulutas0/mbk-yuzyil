import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ticket from "./pages/Ticket";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
      <Footer />

    </BrowserRouter>
    
  );
}

export default App;
