'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import prisma from '@/lib/prisma';

export default function Feed() {
  const router = useRouter();

  // Simulate user authentication check
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) {
      router.push('/'); // Redirect to login if not authenticated
    }
  }, [router]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <h1 className="text-center text-2xl mt-6 font-bold text-black underline mb-4">Your Job Applications</h1>
      <ul className='text-black text-center flex flex-row'>
        <li>Application Post 1</li>
        <li>Application Post 2</li>
        <li>Application Post 3</li>
      </ul>
    </div>
  );
}