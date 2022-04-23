import { Link } from 'react-router-dom';
const NotFound = () => {
    return ( 
        <div className='main-content text-center'>
            <h2 className='primary-color'>Page Not Found 404</h2>
            <p>The Page you are looking is not yet developed !</p>
            <p>You want to back to the Home Page</p>
            <p>Click Here <Link to="/">Home</Link></p>
        </div>
    );
}
 
export default NotFound;