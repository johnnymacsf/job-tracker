// pages/Home.tsx or your main page
'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

export default function Home() {
  const [showSignUp, setShowSignUp] = useState(false); // State to toggle between login and sign up

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold mt-10">
          {showSignUp ? 'Sign Up' : 'Login'}
        </h1>

        {/* Conditionally render either LoginForm or SignUpForm */}
        {showSignUp ? <SignUpForm /> : <LoginForm />}

        {/* Toggle between Login and Sign Up */}
        <p className="text-center mt-4">
          {showSignUp ? (
            <>Already have an account?{' '}
              <span
                onClick={() => setShowSignUp(false)} // Switch to login form
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Login
              </span>
            </>
          ) : (
            <>Don't have an account?{' '}
              <span
                onClick={() => setShowSignUp(true)} // Switch to sign-up form
                className="text-blue-600 hover:underline cursor-pointer"
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