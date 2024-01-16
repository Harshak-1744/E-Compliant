import logo from '../assests/logo.jpg'; 

const Navbar = () => {
  return (
    <nav>
      <div className = 'navbar'>
        <img src={logo} alt="Logo" style={{ height: '124px' }} className='logo' /> 
      </div>
    </nav>
  );
};

export default Navbar;
