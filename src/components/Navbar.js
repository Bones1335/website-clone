import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
import Search from '../images/Search.png';
import { ReactComponent as Chat } from '../images/Chat.svg';
import { ReactComponent as Profile } from '../images/Profile.svg';

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>
        <div className='logo'>
          <img className='icon' src={Logo} alt="logo"></img>
          <h2>Itredd</h2>
        </div>
      </Link>
      <div className="searchBar">
        <input className="search-input" type="text" placeholder='search'></input>
        <button className="search-button" type='submit'>
          <img className='icon search-icon' src={Search} alt='search button'></img>
        </button>
      </div>
      <ul>
        <Link to='/messages'>
          <li>{<Chat className='icon chat-icon' />}</li>
        </Link>
        <Link to='/profile'>
          <div className="profile-container">
            <li>{<Profile className='icon profile-icon' />}</li>
            <h3>Username</h3>
          </div>
        </Link>
      </ul>
      <button className='login-button'>Login</button>
    </nav>
  )
}
