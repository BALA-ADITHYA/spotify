import React, { useContext } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets'
import { songsData } from '../assets/assets'
import { PlayerContext } from '../contexts/PlayerContext'

const DisplayAlbum = () => {
    const {id} = useParams()
    const albumData = albumsData[id];
    const {playWithId} =useContext(PlayerContext)
   
  return (
    <>
        <NavBar />
        <div className=' mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className=' w-48 rounded' src={albumData.image} alt="" /> 
        <div className=' flex flex-col'>
            <p>Playlist</p>
            <h2 className=' text-5xl font-bold md:text-7xl mb-4'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className=' mt-1'>
                <img src={assets.spotify_logo} className=' inline-block w-5' alt="" />
                <b> spotify</b>
                • 1,23,958 likes
                • <b>50 songs</b> about 2 hr 40 min
            </p>
        </div>
        </div>
        <div className=' grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className=' mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className=' hidden sm:block'>Data Added</p>
            <img src={assets.clock_icon} className=' m-auto w-4' alt="" />
        </div>
        <hr />
        {songsData.map((item,index) =>(
            <div onClick={() => playWithId(item.id)} key={index} className=' grid grid-cols-3 sm:grid-cols-4 items-center gap-2 p-2 text-[#a7a7a7] hover:bg-[#ffffff2b]'>
            <p className=' text-white'>
                <b className=' mr-4 text-[#a7a7a7a] '>{index+1}</b>
                <img className=' inline w-10 mr-5' src={item.image} alt="" />
                {item.name}
            </p>
            <p className=' text-[15px]'>{albumData.name}</p>
            <p className=' text-[15px] hidden sm:block'>5 days ago</p>
            <p className=' text-[15px] text-center'>{item.duration}</p>
            </div>
        ))}
    </>
  )
}

export default DisplayAlbum
