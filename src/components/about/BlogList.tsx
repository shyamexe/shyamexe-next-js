import React from 'react';
import TitleComponent from './TittleWidget';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  imageUrl: string;
}

const BlogTileList: React.FC = () => {
  const blogPosts: BlogPost[] = [
    { id: 1, date: 'September 29, 2024', title: 'Understanding Next.js and Tailwind CSS', imageUrl: 'https://via.placeholder.com/421x350' },
    { id: 2, date: 'September 28, 2024', title: 'Getting Started with Flutter', imageUrl: 'https://via.placeholder.com/421x350' },
    { id: 3, date: 'September 27, 2024', title: 'Deploying Your Web App', imageUrl: 'https://via.placeholder.com/421x350' },
    // Add more blog posts here if needed
  ];

  return (
    <div className="max-w-screen-xl ">
      <TitleComponent title='BLOGS'/>
      <div className="flex flex-wrap justify-between">
        {blogPosts.map((post) => (
          <div key={post.id} className="w-full sm:w-1/2 lg:w-1/3  ">
            <div className="relative rounded-lg overflow-hidden bg-transparent">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-[421px] h-[350px] object-cover rounded-lg" 
              />
              <div className="pt-2 pb-4">
                <span className="block text-sm text-gray-500">{post.date}</span>
                <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTileList;