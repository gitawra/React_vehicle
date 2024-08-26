import './App.css';
import {Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/Contact'

function App() {
  return (
    <div className="App">
      {/* <h1>This is OneApp</h1> */}
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/service' element={<Service/>}/>
        {/* <Route exact path='*' element={<Home/>}/> */}
      </Routes>
      
    </div>
  );
}

export default App;
