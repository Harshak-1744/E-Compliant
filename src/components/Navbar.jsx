import logo from '../assests/logo.jpg'; 

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'white', padding: '10px 0', position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={logo} alt="Logo" style={{ height: '50px' }} /> 
      </div>
    </nav>
  );
};

export default Navbar;
