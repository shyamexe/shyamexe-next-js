import React from 'react';

interface BlogTileProps {
  date: string;
  title: string;
  imageUrl: string; // URL for the background image
}

const BlogTile: React.FC<BlogTileProps> = ({ date, title, imageUrl }) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden">
      <img src={imageUrl} alt="Blog Image" className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <span className="block text-sm text-gray-500 rounded bg-gray-100 p-1 inline-block">{date}</span>
        <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default BlogTile;