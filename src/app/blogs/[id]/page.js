import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
const SingleBlog = async ({ params }) => {
    const id = params.id;
    console.log(id);
    const res = await fetch(`http://localhost:3002/blogs/${id}`)
    const blog = await res.json();
    console.log(blog);
    const { title, content, image, date, author } = blog;
    return (
        <div className="card w-3/4 mx-auto bg-base-100 shadow-xl my-24">
            <div className='md:flex justify-between'>
            <Image width={500} height={400}  src={image} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='my-4'>{content}</p>
                <div className='flex justify-between'>
                    <p className='font-bold'>Author: {author}</p>
                    <p className='flex justify-end items-center gap-2 text-blue-600'><FaCalendarAlt/>{date}</p>
                </div>
                <div className="card-actions">
                    <Link href="/blogs"><button className="btn btn-primary">All Blog</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleBlog;