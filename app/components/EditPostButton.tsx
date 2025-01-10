'use client';

import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPostButton( {postId}: any) {
    const router = useRouter();
    
    async function handleClick() {
        localStorage.setItem('postId', postId); // Store postId in localStorage
        router.push('/edit-post'); // Navigate to the edit-post page
    } 
   

    return(
        <button onClick={handleClick} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400">
            <FaEdit />
        </button>
    )
}