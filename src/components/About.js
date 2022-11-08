import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'

const About = () => {
    return (
      <div name='about' className='w-full h-screen bg-[black] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full '> 
       <div>
           <p className='text-4xl font-bold inline border-b-4 border-orange-600 '>About</p>
           <button className='text-[white] border-2 w-[200px] mx-6  py-2 my-2 hover:bg-orange-600 hover:border-orange-600'>
         <a name='contact' className='flex items-center justify-center ' href='contact'>Contact Now <MdOutlineEmail className='mx-3'/></a>
          </button>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4'>
            <div className='sm:text-center text-4xl font-bold'>
              <p>Nice to meet you</p>
            </div>
            <div>
              <p>My greatest passion is helping others. My culinary experience taught me leadership, teamwork and how to work efficiently under pressure. Web development highlights my problem solving skills and has allowed me to use my creativity in a new way. My ultimate goal is to work for a company that allows me to use my love for web development and help build up disadvantaged communities!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};
  
  export default About;
