import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import {db} from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { baseImagePath } from '../Requests';
import { Link, useNavigate } from 'react-router-dom';


const Movie = ({item}) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const {user} = UserAuth();
  const navigate = useNavigate()

  const movieID = doc(db, 'users', `${user?.email}`) 
  // Referencing the database of users and grabbing specific user email.

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path
        })
      })
    } else {
      alert('Please log in to save movies of interest!')
    }
  }

  const truncateString = (str, num) => {
    if(str?.length > num) {
        return str.slice(0,num) + '...';
    } else {
        return str
    }
  }

  const [movieData, setMovieData] = useState();

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img
    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
    {user?.email ? ( 
    <Link to ='/purchaseticket'>
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{truncateString(item?.title, 30)}</p>
        <p onClick={saveMovie}>
            {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' />
            ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
            )}
        </p>
    </div>
    </Link>
    ) : (
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{truncateString(item?.title, 30)}</p>
        <p onClick={saveMovie}>
            {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' />
            ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
            )}
        </p>
    </div>
    )}
    </div>
  )
}



export default Movie




