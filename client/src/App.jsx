import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ticket from "./pages/Ticket";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllTickets from "./pages/AllTickets";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/all-tickets" element={<AllTickets />} />
      </Routes>
      <Footer />

    </BrowserRouter>
    
  );
}

export default App;
