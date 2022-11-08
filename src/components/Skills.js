import React from 'react'
import HTML from '../images/html.png'
import CSS from '../images/css.png'
import ReactImg from '../images/react.png'
import Node from '../images/node.png'
import Mongo from '../images/mongo.png'
import JavaScript from '../images/javascript.png'
import { MdOutlineEmail } from 'react-icons/md'


const Skills = () => {
  return (
   <div name='skills' className='w-full h-screen bg-[black] text-gray-300'>
   {/* Container */}
   <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
       <div>
           <p className='text-4xl font-bold inline border-b-4 border-orange-600 '>Languages</p>
           <button className='text-[white] border-2 w-[200px] mx-6  py-2 my-2 hover:bg-orange-600 hover:border-orange-600'>
         <a name='contact' className='flex items-center justify-center ' href='contact'>Contact Now <MdOutlineEmail className='mx-3'/></a>
          </button>




           <p className='py-4'>These are the technologies I've worked with</p>
       </div>
           
       <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-2 text-center py-8'>            <div className='hover:scale-110 duration-500'>
               <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
               <p className='my-4'>HTML</p>
            </div>
            <div className='hover:scale-110 duration-500'>
               <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
               <p className='my-4'>CSS</p>
            </div>
            <div className='hover:scale-110 duration-500'>
               <img className='w-20 mx-auto' src={JavaScript} alt='JS icon' />
               <p className='my-4'>JavaScript</p>
            </div>
            <div className='hover:scale-110 duration-500'>
               <img className='w-20 mx-auto' src={Node} alt='NODE icon' />
               <p className='my-4'>Node</p>
            </div>
            <div className='hover:scale-110 duration-500'>
               <img className='w-20 mx-auto' src={ReactImg} alt='REACT icon' />
               <p className='my-4'>React</p>
            </div>
            <div className='hover:scale-110 duration-500'>
               <img className='w-20 mx-auto' src={Mongo} alt='MONGODB icon' />
               <p className='my-4'>MongoDB</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills