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
                <img src='https://o.remove.bg/downloads/2a5d6106-cfb5-4a0f-ac8a-6591132321d0/WhatsApp_Image_2022-06-20_at_2.28.20_PM-removebg-preview.png'/>
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