import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/3yKHY7b/pexels-vlada-karpovich-4050468.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 bg-black"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello, Welcome to Our Blog Site</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <a href="/login"><button className="btn bg-black text-white hover:text-black hover:bg-white">Get Started</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;