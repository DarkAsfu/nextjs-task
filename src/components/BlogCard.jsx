import Image from 'next/image';
import React from 'react';

const BlogCard = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><Image width={300} height={300} src="https://i.ibb.co/qsdkRbH/pexels-pixabay-261579.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;