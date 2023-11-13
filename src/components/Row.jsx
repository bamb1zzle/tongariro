import React, { useEffect, useState } from 'react'
// import requests from '../Requests'
import axios from 'axios'
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';



const Row = ({ title, fetchURL, rowID  }) => {
    const [movies, setMovies] = useState([]);



    useEffect(()=> {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchURL])
    // Whenever the URL changes the component can refresh again
    // Using api inside this use effect. -> Putting this into our movies state.

    // console.log(movies)

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    // WATCH THE CAPITALIZATION
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }


    // need to add something for the characters that are too big


  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        {/* group for when you hover over the parent div to make the arrows appear */}
            <MdChevronLeft onClick={slideLeft} 
            className='bg-white left-5 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div id={'slider' + rowID} 
        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {movies.map((item, id) => (
                <Movie key={id} item={item} />
            ))}
        </div>
        <MdChevronRight onClick={slideRight}
        className='bg-white right-5 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
      </div>
    </>
  )
}

export default Row

// Passing properties -> Reuse components