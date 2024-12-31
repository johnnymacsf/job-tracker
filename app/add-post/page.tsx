'use client';

import React from "react";
import { useState } from "react";
import {useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AddPost() {
    const router = useRouter();
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    
    return(
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-blue-500 p-4 flex justify-between items-center">
                <h1 className="text-white text-5xl text-center flex-1">Add Application</h1>
                <button onClick={() => router.back()} className="text-white text-lg px-4 py-2 rounded border-2 border-white hover:bg-blue-300 ml-auto">
                    Back
                </button>
            </nav>
            <form className="max-w-md mx-auto p-4 bg-white rounded shadow">
                <div className="mb-4">
                    <label htmlFor="jobTitle" className="block text-lg font-medium text-blue-500 text-center flex-1">Job Title</label>
                    <input type="text" id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-black text-black" placeholder="Enter job title"
                    ></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="companyName" className="block text-lg font-medium text-blue-500 text-center flex-1">Company Name</label>
                    <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-black text-black" placeholder="Enter company name"
                    ></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="block text-lg font-medium text-blue-500 text-center flex-1">Application Status</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                    >
                        <option value="" disabled>Select a status</option>
                        <option value="interviewing">Interviewing</option>
                        <option value="rejected">Rejected</option>
                        <option value="pending">Pending</option>
                        <option value="job offered">Job Offered</option>
                        <option value="offer accepted">Offer Accepted</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg font-medium text-blue-500 text-center flex-1">Job Description</label>
                    <textarea 
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter a job description"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black placeholder-black"
                    />
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-300">
                    Submit
                </button>
            </form>
            
        </div>
    )
}