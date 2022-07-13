import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/Logo.svg';
import { ReactComponent as Chat } from '../images/chat.svg';

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>
        <div className='logo'>{<Logo />}</div>
      </Link>
      <ul>
        <Link to='/messages'>
          <li>{<Chat />}</li>
        </Link>
      </ul>
    </nav>
  )
}
