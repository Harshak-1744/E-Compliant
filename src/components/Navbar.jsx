import logo from '../assests/logo.jpg'; 

const Navbar = () => {
  return (
    <nav>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={logo} alt="Logo" style={{ height: '124px' }} className='logo' /> 
      </div>
    </nav>
  );
};

export default Navbar;
