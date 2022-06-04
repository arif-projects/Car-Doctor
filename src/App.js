import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Booking from "./components/Booking/Booking/Booking";
import Login from "./components/Login/Login/Login";
import Navber from "./components/Shared/Navber/Navber";

function App() {
  return (
    <div className="App">
      <Router>
        <Navber></Navber>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/booking/:bookingId" element={<Booking />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
