import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'


const Home = () => {
  return (
    
    <div name='home' className='w-full h-screen bg-[black]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-[whitesmoke]'>Juan Aviles</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[darkgray]'>Full Stack Developer</h2> 
            <p className='text-orange-500 text-lg py-4 max-w-[700]'> I am passionate about building software with excellence to improve the lives of those around me.</p>
            
        <button className='text-[white] border-2 w-[200px] px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600'>
         <a name='contact' href='contact'>Contact Now</a>
          <span className=''>
            <MdOutlineEmail className='ml-3' />
          </span>
          </button>
        </div>
    </div>
   
  )
}

export default Home; 