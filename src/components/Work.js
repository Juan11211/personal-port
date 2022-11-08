import React from 'react'
import movie from '../images/movieapp.png'
import meme from '../images/meme.png'
import budget from '../images/budget.png'
import HTML from '../images/html.png'
import JavaScript from '../images/javascript.png'
import CSS from '../images/css.png'
import ReactImg from '../images/react.png'
import { MdOutlineEmail } from 'react-icons/md'

const Work = () => {
  return (
    <div name='skills' className='w-full md:h-full bg-[black] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline-block border-b-4 border-orange-600 my-20'>Work</p>
           <button className='text-[white] border-2 w-[200px] mx-6 py-2 hover:bg-orange-600 hover:border-orange-600'>
         <a name='contact' className='flex items-center justify-center  ' href='contact'>Contact Now <MdOutlineEmail className='mx-3'/></a>
          </button>

            </div>
            {/* container */}
            <div className="py-3 grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/* grid item */}
                <div 
                style={{backgroundImage: `url(${budget})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider mr-3'>
                            Budget App
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='https://budgetreact-app.netlify.app'
                                target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[orange] font-bold text-lg'>
                                        View Demo
                                    </button>
                                </a>
                                <a href='https://github.com/Juan11211/budget-app'
                                target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[orange] font-bold text-lg'>View Code</button>
                                </a>
                            </div>
                    </div>
                </div>
                <>
                <h1 className='text-md mx-auto'>Languages I used: 
                <div className='inline-flex mx- p-2'>
                <img className='w-10 ' src={HTML} alt='HTML icon' />
                <img className='w-10 ' src={ReactImg} alt='REACT icon' />
                <img className='w-10 ' src={JavaScript} alt='JS icon' />
                <img className='w-10' src={CSS} alt='CSS icon' />
                </div>
                </h1>
                </>
                <h2 className='my-8'>Description: 
                This budget app allows a user to set a budget and it also allows a user to add expenses to that budget. The app allows you to keep track of your budget and expenses. A user can edit, delete a budget and expenses as well.  </h2>
                
                
                   {/* grid item */}
                   <div 
                style={{backgroundImage: `url(${meme})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider mr-3'>
                            Meme Generator App
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='https://memeegenerator-app.netlify.app'
                                target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[orange] font-bold text-lg'>
                                        View Demo
                                    </button>
                                </a>
                                <a href='https://github.com/Juan11211/meme-generator-app'
                                target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[orange] font-bold text-lg'>View Code</button>
                                </a>
                            </div>
                       
                    </div>
                </div>
                <>
                <h1 className='text-md mx-auto'>Languages I used: 
                <div className='inline-flex mx- p-2'>
                <img className='w-10 ' src={HTML} alt='HTML icon' />
                <img className='w-10 ' src={ReactImg} alt='REACT icon' />
                <img className='w-10 ' src={JavaScript} alt='JS icon' />
                <img className='w-10' src={CSS} alt='CSS icon' />
                </div>
                </h1>
                </>
                <h2 className='my-8'>Description: 
                This meme-generator app allows a user to generate a image at random and add a text to that image.</h2>
                   {/* grid item */}
                   <div 
                style={{backgroundImage: `url(${movie})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider mr-3'>
                            Movie App
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='https://moviereact-app.netlify.app' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[orange] font-bold text-lg'>
                                        View Demo
                                    </button>
                                </a>
                                <a href='https://github.com/Juan11211/movie-app' 
                                target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[orange] font-bold text-lg'>
                                        View Code
                                    </button>
                                </a>
                            </div>
                       
                    </div>
                </div>
                <>
                <h1 className='text-md mx-auto'>Languages I used: 
                <div className='inline-flex mx- p-2'>
                <img className='w-10 ' src={HTML} alt='HTML icon' />
                <img className='w-10 ' src={ReactImg} alt='REACT icon' />
                <img className='w-10 ' src={JavaScript} alt='JS icon' />
                <img className='w-10' src={CSS} alt='CSS icon' />
                </div>
                </h1>
                </>
                <h2 className='my-8'>Description: 
                This movie app was created using the MovieDB. It shows a list of movies currently out, it also shows the films trending for the week. A user can also favorite a film.   </h2>
            </div>
        </div>
    
    </div>
  )
}

export default Work; 
