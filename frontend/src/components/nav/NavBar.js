import React from 'react'
import './NavBar.css'
import {Link} from 'react-scroll'

const NavBar = () => {
    return (
        <div>
            <nav>
                <div><h1>SAS Swimming Pool</h1> </div>
                <div>
                    <ul className='items'>
                        <li className='home'><Link to='home' smooth={true}>HOME</Link></li>
                        <li className='program'><Link to='program' smooth={true}>PROGRAM</Link></li>
                        <li className='classess'><Link to='classess' smooth={true}>CLASSESS</Link></li>
                        <li className='members'><Link to='members' smooth={true}>MEMBERS</Link></li>
                        <li className='trainers'><Link to='trainers' smooth={true}>TRAINERS</Link></li>
                        <li className='booknow'><button><Link to='booknow' smooth={true}>BOOKNOW</Link></button></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
