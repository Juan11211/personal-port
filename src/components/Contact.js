import React from 'react'

const Contact = () => {
  return (
    <div name='contact'className='w-full h-screen bg-[black]  flex justify-center items-center p-4 text-[whitesmoke]'> 
        <form method='POST' action='https://getform.io/f/5968fd23-8475-46f3-9835-12da9b879e15' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-600'>Contact</p>
            </div>
            <input className='bg-[whitesmoke] text-black p-2' type='text' placeholder='Full Name' name='name' />
            <input className='my-4 p-2 bg-[whitesmoke] text-black' type='text' placeholder='Email' name='email' />
            <textarea className='bg-[whitesmoke] text-black p-2' placeholder='Message Me' name='message' rows='10'></textarea>
            <button className='bg-[whitesmoke] text-[black] border-2 hover:bg-orange-400 hover:border-orange-400 px-4 py-3 my-8 mx-auto flex items-center '>Lets Connect!</button>

        </form>
    </div>
  )
}

export default Contact; 