import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home, FourNotFour, Dispose } from "./pages";
import { Login, Profile, Signup } from "./components";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dispose' element={<Dispose />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='*' element={<FourNotFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
