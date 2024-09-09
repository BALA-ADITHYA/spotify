import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image,name,desc,id}) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate (`/albums/${id}`)} className=' min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff23]'>
      <img className=' rounded' src={image} alt="" />
      <p className=' font-bold mb-1 mt-2 '>{name}</p>
      <p className=' text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem
