import './Navbar.css'

import MenuIcon from '@mui/icons-material/Menu';
import CricketLogo from '../../Images/Cricket Icon2.png'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='nav-cont'  >
            <MenuIcon className='nav-icon' />
            <ul>
                <li>Cricket Bats</li>
                <li>Cricket Sko</li>
                <li>Udystr</li>
            </ul>
            <Link to="/" >
                <img src={CricketLogo} alt="" />
            </Link >
            <div>
                <SearchIcon />
                <input type="text" />
            </div>
            <PermIdentityIcon className='nav-icon' />
            <Link to="/shoppingCart" >
                <ShoppingBagIcon className='nav-icon' />
            </Link>
        </div>
    )
}


export default Navbar