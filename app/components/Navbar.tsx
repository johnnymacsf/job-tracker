'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check for authentication token in local storage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set `isAuthenticated` to true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    router.push('/');
  }

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-4xl font-bold">
          <Link href="/">Job Application Tracker</Link>
        </div>
        <div className="ml-auto space-x-5">
          {isAuthenticated && (
            <>
              <Link
                href={"/add-post"}
                className="inline-flex items-center justify-center p-4 rounded border-2 border-white text-white hover:bg-blue-300"
              >
                Add Application
              </Link>
              <button
                className="inline-flex items-center justify-center p-4 rounded border-2 border-white text-white bg-red-600 text-white hover:bg-red-300"
                onClick={handleLogout}>
                  Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}