import React from 'react'
import './home.scss'
import {AcUnit} from '@material-ui/icons'
import NavBar from '../../Navbar/NavBar'
import Featured from '../../Featured/Featured'
import List from '../../List/List'


const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
       <Featured type = 'movie'/> 
       <List/>
       <List/>
       <List/>
       <List/>
    </div>
  )
}

export default Home