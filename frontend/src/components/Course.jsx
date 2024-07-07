import React from 'react'
import Courses from '../courses/Courses'
import Cards from './Cards'
import list from "../../public/List.json";
import { Link } from 'react-router-dom'

function Course() {
  return (
    
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
    <div className='mt-28 items-center text-center justify-center'>
        <h1 className='text-2xl md:text-4xl' >
            We are delighted to have you <span className='text-pink-500'> here :) </span> </h1>
        <p className='mt-12'>
        Explore our diverse range of courses across various subjects designed to ignite your passion for learning. 
        From science and mathematics to arts and humanities, our expertly crafted programs cater to all ages and skill levels. 
        Join us to gain valuable knowledge and skills, and embark on your educational journey today!
        </p>
        <Link to="/"> 
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
    {
       list.map((item)=>(
        <Cards key={item.id} item={item}/>))
    }
    </div>
   </div>
   </>
  )
}

export default Course
