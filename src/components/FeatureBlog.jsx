import loadAllBlogData from '@/utils/loadAllBlogData';
import React from 'react';
import BlogCard from './BlogCard';

const FeatureBlog = async() => {
    const blogs = await loadAllBlogData();
    return (
        <div className='w-11/12 mx-auto my-16'>
            <h1 className='text-3xl text-center my-6 font-bold text-black'>Features Blog</h1>
            <div className='grid md:grid-cols-3 gap-10'>
            {
                blogs.slice(0, 6).map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
            </div>
        </div>
    );
};

export default FeatureBlog;