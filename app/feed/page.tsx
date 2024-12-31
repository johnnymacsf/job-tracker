'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import prisma from '@/lib/prisma';

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

      <ul className='text-black text-center flex flex-row space-x-4'>
        <li>Application Post 1</li>
        <li>Application Post 2</li>
        <li>Application Post 3</li>
      </ul>
    </div>
  );
}