
import Home from './components/home'    
import About from './components/about'
import Contact from './components/contact';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/nav'
import Gallery from './components/gallery';
import Upload from './components/upload';
function App() {
  const [nav,setnav]=useState(false)
  const navinverse=()=>{
    setnav(!nav);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <button className='nav-btn' onClick={navinverse}></button>
        {(nav)?(<Nav></Nav>):(<></>)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


