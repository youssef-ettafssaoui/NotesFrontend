import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <h2 className='primary-color'>Notes App using React & Spring Boot</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="#" className='ml-3'>New Note</Link>
            </div>
        </nav>

    );
}
 
export default Navbar;