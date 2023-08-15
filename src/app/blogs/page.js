import BlogCard from '@/components/BlogCard';
import loadAllBlogData from '@/utils/loadAllBlogData';
import Image from 'next/image';
import React from 'react';

const BlogsPage = async () => {
    const blogs = await loadAllBlogData();
    console.log(blogs);
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1>Blogs : {blogs.length}</h1>
            <div>
                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;