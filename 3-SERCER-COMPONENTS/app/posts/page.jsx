import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import React from 'react'
// 1
const page = async () => {
  // 2
  const posts=await getAllPosts();
  // here we doit the the particular post/segements ui just to take the author and title
  // 
  // console.log(posts);
  
  return (
    // 5
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>All Blog Posts</h1>
        <ul className='mt-12'>
          {posts.map(post => (
            <li key={post.slug} className='p-3 bg-pink-500 mb-4'>
              {/* 6*/}
              <Link href={`/posts/${post.slug}`}>
              <h2 className='text-lg font-medium'>
                {posts?.content}
                {post.frontmatter?.title}
              </h2>
              <p className='text-sm text-black-900'>{post.frontmatter?.author}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page
