"use client"

import { Typewriter } from 'react-simple-typewriter'
const  TypeWriterText =()=>{
    return(
        <div className='text-3xl font-sans sm:text-4xl font-normal'>
        <Typewriter
 words={
    ['applications.', 'experiences.', 'for users.']
 }
/>
        </div>
    );
}

export default  TypeWriterText;