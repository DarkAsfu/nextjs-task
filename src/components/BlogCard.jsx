import Image from 'next/image';
import React from 'react';

const BlogCard = ({ blog }) => {
    const { id, title, author, date, image, content } = blog;
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <div href="#"><div className="relative">
                <Image width={400} height={300} className="w-full" src="https://i.ibb.co/qsdkRbH/pexels-pixabay-261579.jpg" alt="Sunset in the mountains"/>
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    <a href="#!"><span className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Photos
                    </span></a>
                    <div href="!#"><div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <span className="font-bold">New</span>
                        <small>Blogs</small>
                    </div></div>
            </div></div>
            <div className="px-6 py-4">
                <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">{title}</a>
                <p className="text-gray-500 text-sm">
                    {content.slice(0,50)}...see more
                </p>
            </div>
            <div className="px-6 py-4 flex justify-between items-center">
                <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <span className="ml-1">{author}</span>
                </span>
                <span className="ml-1">{date}</span>
            </div>
            <button className='px-6 bg-blue-600 text-white mb-10 ml-6 py-3 rounded-sm'>Details</button>
        </div>
    );
};

export default BlogCard;