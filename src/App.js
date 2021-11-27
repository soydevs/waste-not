import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Dispose from "./pages/Dispose";
import FourNotFour from "./pages/FourNotFour";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/dispose' element={<Dispose />} />
        <Route path='*' element={<FourNotFour />} />
      </Routes>
    </Router>
  );
}

export default App;
