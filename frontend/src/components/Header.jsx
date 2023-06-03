import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Goal Setter</Link>
        </div>
    </header>
  )
}

export default Header