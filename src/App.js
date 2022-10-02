
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
