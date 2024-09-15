"use client"

import { Typewriter } from 'react-simple-typewriter'
const TypeWriterText = () => {
    return (
        <div className='w-[135px] sm:w-[200px]'>

            <div className='text-2xl font-sans sm:text-4xl font-normal '>
                <Typewriter
                    loop={true}
                    words={
                        ['applications.',
                            'experiences.', 'for users.',
                        ]
                    }
                />
            </div>
        </div>
    );
}

export default TypeWriterText;