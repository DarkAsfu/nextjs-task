import React from 'react';

const loadAllBlogData = async() => {
    const res = await fetch('https://nextjs-task-git-main-darkasfu.vercel.app/api/blogs')
    return res.json();
};

export default loadAllBlogData;