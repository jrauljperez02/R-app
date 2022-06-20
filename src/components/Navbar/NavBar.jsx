import { Search, Notifications, ArrowDropDown } from '@material-ui/icons'
import React, {useState} from 'react'
import './navbar.scss'


const NavBar = () => {
    const [isScrolled,setIsScroolled] = useState(false);

    window.onscroll = () => {
        setIsScroolled(window.pageYOffset === 0 ? false : true)

        return () => (window.onscroll = null)
    };


  return (
    <div className = {isScrolled ? 'navbar scrolled': 'navbar'}>
        <div className="container">
            <div className="left">
                <img src='https://github.com/jrauljperez02/R-app/blob/main/src/logo_transparent.png?raw=true'/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and popular</span>
                <span>My list</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png'/>
                
                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                
            </div>

            
        </div>
    </div>
  )
}

export default NavBar