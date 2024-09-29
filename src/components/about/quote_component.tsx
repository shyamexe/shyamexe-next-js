 import React from 'react';

const QuoteComponent: React.FC = () => {
  return (
    <div className="  text-white   pt-32">
      <h1 className="text-4xl md:text-5xl font-serif mb-8 ">
        “There is nothing so useless as doing efficiently that which should not be done at all.”
      </h1>
      <p className="text-lg md:text-2xl">
       { `My tech journey is deeply rooted in languages like Dart and JavaScript, with tools like Firebase and platforms like Next.js enabling me to take my ideas from concept to reality. Currently, I'm honing my skills in advanced Flutter animations, bringing life to apps through fluid transitions, while exploring server-rendered possibilities with Next.js to create even more dynamic web applications.`}
      </p>
    </div>
  );
};

export default QuoteComponent;
