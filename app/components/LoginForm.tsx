'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.status === 200) {
      console.log("Going to feed")
      localStorage.setItem("token", data.token)
      localStorage.setItem("userId", data.userId);

      console.log(data.userId);
      
      router.push("/feed")
    } else {
      setError(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 text-black bg-gray-100">
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white-800">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-white-800">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400">
        Login
      </button>
    </form>
  );
}