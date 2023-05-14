import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav>
            <h2>Redux Store</h2>
            <ul>
                <li>Home</li>
                <li><Link to={"/WishList"}>Cart</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header