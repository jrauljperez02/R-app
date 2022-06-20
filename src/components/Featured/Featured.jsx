import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './featured.scss'

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === 'movie' ? 'Movies': "Series"}</span>
                <select name='genre' id = 'genre'>
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
                </select>
            </div>   
        )}
        <img
        src='https://i.pinimg.com/originals/49/86/d7/4986d7c7b927ef7dfc9955f1d05267b7.jpg'
        />
        <div className='info'>
            <img src='https://es.logodownload.org/wp-content/uploads/2020/09/star-wars-logo-3-11-1024x443.png'/>
            <span className = 'description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, mi eu placerat molestie, arcu tellus pharetra magna, ac lacinia dolor diam ac nibh. Vivamus molestie erat sit amet hendrerit pellentesque. Quisque posuere, ante.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured