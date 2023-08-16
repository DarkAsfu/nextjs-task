import React from 'react';

const loadAllBlogData = async() => {
    const res = await fetch('http://localhost:3001/blogs')
    return res.json();
};

export default loadAllBlogData;