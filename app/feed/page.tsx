'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import prisma from '@/lib/prisma';
import Post from '../components/Post';

export default function Feed() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);

  // Simulate user authentication check
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token');
    const currentUserId = localStorage.getItem('userId');

    if (!isAuthenticated) {
      router.push('/'); // Redirect to login if not authenticated
    }else if(currentUserId){
      setUserId(currentUserId);
    }
  }, [router]);

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
        <Post  id='1' jobTitle='Jr. FrontEnd Developer' companyName='Google' description={"FrontEnd Developer position for recent graduates for Google"} status='Pending'/>
        <Post  id='2' jobTitle='Software Engineer' companyName='Oracle' description={"A long job description to test how far the description box will go. This is for testing purposes. Expand the box."} status='Interviewing'/>
        <Post  id='2' jobTitle='Software Engineer' companyName='Oracle' description={""} status='Rejected'/>
        <Post  id='2' jobTitle='Software Engineer' companyName='Oracle' description={"Software Engineer position for Oracle"} status='Job Offered'/>
        <Post  id='2' jobTitle='Software Engineer' companyName='Oracle' description={"Software Engineer position for Oracle"} status='Offer Accepted'/>
        <Post  id='2' jobTitle='Software Engineer' companyName='Oracle' description={"Software Engineer position for Oracle"} status='Interviewing'/>
        <Post  id='2' jobTitle='Software Engineer' companyName='Oracle' description={"Software Engineer position for Oracle"} status='Interviewing'/>
      </div>
    </div>
  );
}