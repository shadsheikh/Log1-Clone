import './Header.css'
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../assets/img.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div>
                    <img src={logo} width="150px" />
                </div>
                <div className='right'>
                    <IoNotificationsOutline size='1.5em' className='icon' />
                    <p className='text'>Shad Sheikh</p>
                    <IoIosArrowDown className='icon' />
                </div>
            </div>
        </header>
    );
}

export default Header;