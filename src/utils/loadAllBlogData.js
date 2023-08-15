import React from 'react';

const loadAllBlogData = async() => {
    const res = await fetch('http://localhost:5000/blogs/')
    return res.json();
};

export default loadAllBlogData;