// import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket, user }] = useStateValue();

    const handleAuthen = () => {
        if (user) {
            auth.signOut();
        }
    }

    // const [email] = useState('');

    // var name = email.substring(0, email.lastIndexOf("@"));

    return (
        <div className='header'>
        <Link to='/'>
        <img className="header__logo" alt='amazon_logo' src="./images/amazon_PNG.png" />
        </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder='Search for anything!'/>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">

                <Link to={!user && '/login'}>
                    <div onClick={ handleAuthen } className="header__option">
                        <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In' }</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">&amp; Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className = "header__optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
