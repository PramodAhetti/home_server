
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
     <nav className='navbar debug'>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
     </nav>
  );
};

export default Nav;
