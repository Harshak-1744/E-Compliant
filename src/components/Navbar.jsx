import logo from '../assests/logo.jpg'; 
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className = 'navbar'>
        <Link to="/"><img src={logo} alt="Logo" style={{ height: '124px' }} className='logo' /></Link>
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/newUser">New Register</Link>
        </li>
      </ul> 
      </div>
    </nav>
  );
};

export default Navbar;
