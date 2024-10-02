// import { FC } from 'react';
// import TitleComponent from './TittleWidget';

// interface Skill {
//     id: number;
//     name: string;
// }

// interface SkillsComponentProps {
//     skills: Skill[];
//     title: string;
// }

// const SkillsComponent: FC<SkillsComponentProps> = ({ skills, title }) => {
//     return (
//         <div >
//             <TitleComponent title={title} />
//             <p className=" leading-relaxed font-bold text-xl">
//                 {skills.map((skill, index) => (
//                     <span key={skill.id}>
//                         {skill.name}
//                         {index < skills.length - 1 ? ' / ' : ''}
//                     </span>
//                 ))}
//             </p>
//         </div>
//     );
// };

// export default SkillsComponent;

'use client'
import TitleComponent from './TittleWidget';
import { FC,  useRef } from 'react'
import { gsap } from 'gsap' 
import { useGSAP } from '@gsap/react';

interface Skill {
  id: number
  name: string
}

interface SkillsComponentProps {
  skills: Skill[]
  title: string
}

const SkillsComponent: FC<SkillsComponentProps> = ({ skills, title }) => {
  const titleRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLSpanElement[]>([])

  useGSAP(() => {
    // Animate the title
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    // Animate the skills with a staggered effect
    gsap.from(skillsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger:{
        trigger:titleRef.current,
        toggleActions: 'play none none none',
      }
    })
  }, [])

  return (
    <div >
      <div ref={titleRef}>
        <TitleComponent title={title} />
      </div>
      <p className="leading-relaxed font-bold text-xl text-white mt-4">
        {skills.map((skill, index) => (
          <span
            key={skill.id}
            ref={el => {
              if (el) skillsRef.current[index] = el
            }}
            className="inline-block"
          >
            {skill.name}
            {index < skills.length - 1 ? (
              <span className="mx-2 text-yellow-300">/</span>
            ) : (
              ''
            )}
          </span>
        ))}
      </p>
    </div>
  )
}

export default SkillsComponent