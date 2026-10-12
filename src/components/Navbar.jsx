import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  console.log('Navbar rendered');
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if(window.scrollY > 100){
        setShowBackground(true);
      }
      else{
        setShowBackground(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${showBackground ? ' navbar-black' : ''}`}>
      <div className="navbar-logo">NETFLIX</div>
      <ul className="navbar-links">
          <li>Home</li>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>My List</li>
      </ul>
      <div className="navbar-profile">U</div>
    </nav>
  );
}


export default Navbar;