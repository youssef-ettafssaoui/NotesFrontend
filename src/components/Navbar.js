import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <h2 className='primary-color'><Link to="/">Notes App</Link></h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/add" className='ml-3'>New Note</Link>
            </div>
        </nav>

    );
}
 
export default Navbar;