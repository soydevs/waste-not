import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import { Home, FourNotFour, Dispose } from './pages';
import { Signup } from './components';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/dispose' element={<Dispose />} />
            <Route path='*' element={<FourNotFour />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
