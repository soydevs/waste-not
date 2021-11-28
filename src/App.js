import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home, FourNotFour, Dispose } from "./pages";
import { Login, Profile, Signup, VolunteerLogin, VolunteerSignup } from "./components";
import VolunteerHome from "./pages/v_home";

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
          <Route path='/volunteer/signup' element={<VolunteerSignup/>} />
          <Route path='/volunteer/login' element={<VolunteerLogin/>} />
          <Route path='/volunteer/home' element={<VolunteerHome/>} />
          <Route path='*' element={<FourNotFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
