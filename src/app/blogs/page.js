import BlogCard from '@/components/BlogCard';
import loadAllBlogData from '@/utils/loadAllBlogData';
import React from 'react';

const BlogsPage = async () => {
    const blogs = await loadAllBlogData();
    // console.log(blogs);
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-xl font-bold my-3'>Number of Blogs : {blogs.length}</h1>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;