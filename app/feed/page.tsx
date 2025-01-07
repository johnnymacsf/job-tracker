'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Post from '../components/Post';


interface PostType {
  id: string;
  jobTitle: string;
  companyName: string;
  description: string | null;
  status: string;
}

export default function Feed() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);

  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token');
    const currentUserId = localStorage.getItem('userId');

    if (!isAuthenticated) {
      router.push('/');
    }else if(currentUserId){
      setUserId(currentUserId);
    }
  }, [router]);

  useEffect(()=> {
    if(userId){
      const fetchPosts = async () => {
        try{
          const response = await fetch(`/api/posts?userId=${userId}`);
          if(response.ok){
            const data = await response.json();
            setPosts(data);
          }else{
            console.error(`Unable to retrieve userId ${userId} posts`);
          }
        }catch(error: any){
          console.error(error)
        }
      };
      console.log(`User id is ${userId}`)
      fetchPosts();
    }
  }, [userId])

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <h1 className="text-center text-2xl mt-6 font-bold text-black underline mb-4">Your Job Applications</h1>
      {userId ? (
        <p className="text-center text-xl text-black mb-6">Current user Id: {userId}</p>
      ) : (
        <p className="text-center text-xl text-black mb-6">User ID not found</p>
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4'>
      {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              jobTitle={post.jobTitle}
              companyName={post.companyName}
              description={post.description}
              status={post.status}
            />
          ))
        ) : (
          <p className="text-center text-xl text-black">No applications found.</p>
        )}
      </div>
    </div>
  );
}