'use client';

import { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

export default function Home() {
  const [showSignUp, setShowSignUp] = useState(false);
  return ( 
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-4xl font-bold">
            <h1>Job Application Tracker</h1>
        </div>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center text-black">
        <h1 className="text-center text-2xl font-bold mt-10">
          {showSignUp ? 'Sign Up' : 'Login'}
        </h1>
        {showSignUp ? <SignUpForm /> : <LoginForm />}
        <p className="text-center mt-4 text-black">
          {showSignUp ? (
            <>Already have an account?{' '}
              <span
                onClick={() => setShowSignUp(false)}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Login
              </span>
            </>
          ) : (
            <>Don't have an account?{' '}
              <span
                onClick={() => setShowSignUp(true)}
                className="text-blue-600 hover:underline cursor-pointer hover:text-blue-400"
              >
                Sign up
              </span>
            </>
          )}
        </p>
      </main>
    </div>
  );
}