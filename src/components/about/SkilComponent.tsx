import { FC } from 'react';
import TitleComponent from './TittleWidget';

interface Skill {
    id: number;
    name: string;
}

interface SkillsComponentProps {
    skills: Skill[];
    title: string;
}

const SkillsComponent: FC<SkillsComponentProps> = ({ skills, title }) => {
    return (
        <div >
            <TitleComponent title={title} />
            <p className=" leading-relaxed font-bold text-xl">
                {skills.map((skill, index) => (
                    <span key={skill.id}>
                        {skill.name}
                        {index < skills.length - 1 ? ' / ' : ''}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default SkillsComponent;