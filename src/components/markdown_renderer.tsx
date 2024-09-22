import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    // <div className="prose prose-lg max-w-none dark: ">
    <div className="prose prose-lg max-w-none prose-invert  text-white">
      <ReactMarkdown
      
      
      >{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;