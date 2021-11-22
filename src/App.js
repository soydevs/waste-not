import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import { Home } from './pages';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} exact/>


            {/* <Route component={FourNotFour} /> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
