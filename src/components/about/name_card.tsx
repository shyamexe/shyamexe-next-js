 
import React from 'react';
import CoolTags from './tag_component';
import RevealParagraph from './paragraph';
import InteractiveTitle from './interactive_title';

const NameCard: React.FC = () => {
  return (
    <div className=" text-white   flex flex-col md:flex-row items-center">
      {/* <div className="flex-1 mb-6 md:mb-0">
        <h1 className="text-5xl font-bold">Shyamjith VP</h1>
        <h2 className="text-3xl sm:text-5xl font-light">Software Architect</h2>
      </div> */}
      <InteractiveTitle/>
      <div className="flex-1">
        <RevealParagraph/>
        {/* <p className="text-xl ml-0 mb-4">
          A passionate Flutter developer hailing from the picturesque landscapes
          of Kerala, India. With a background in computer science engineering, I
          thrive on turning innovative ideas into delightful digital experiences.
        </p> */}
        <CoolTags/>
      </div>
    </div>
  );
};

export default NameCard;
