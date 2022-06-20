import React from 'react'
import './home.scss'
import {AcUnit} from '@material-ui/icons'
import NavBar from '../components/Navbar/NavBar'
import Featured from '../components/Featured/Featured'


const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
       <Featured type = 'movie'/> 
    </div>
  )
}

export default Home