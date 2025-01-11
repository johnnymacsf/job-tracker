'use client';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditPostPage = () => {
    const router = useRouter();
    const [status, setStatus] = useState('');
    const [postId, setPostId] = useState('');

    useEffect(() => {
        const storedPostId = localStorage.getItem('postId');
        if (storedPostId) {
            setPostId(storedPostId);
        }
    }, []);

    const handleSave = async () => {
        try {
            const response = await fetch(`/api/posts?postId=${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });

            if (response.ok) {
                toast.success("Successfully edited your application post!");
            }else{
                toast.error("Uh oh! Something went wrong trying to update your application post status!")
            }
        } catch (error) {
            console.error("Error saving post: ", error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <ToastContainer autoClose={5000}/>
            <nav className="bg-blue-500 p-4 flex justify-between items-center">
                <h1 className="text-white text-5xl text-center flex-1">Update Application</h1>
                <button onClick={() => router.back()} className="text-white text-lg px-4 py-2 rounded border-2 border-white hover:bg-blue-300 ml-auto">
                    Back
                </button>
            </nav>
            <form className="max-w-md mx-auto p-4 bg-white rounded shadow">
                <div className="mb-4">
                    <label htmlFor="status" className="block text-lg font-medium text-blue-500 text-center flex-1">Application Status</label>
                    <select
                        id="status"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Interviewing">Interviewing</option>                            <option value="Rejected">Rejected</option>
                        <option value="Pending">Pending</option>
                        <option value="Job offered">Job Offered</option>
                        <option value="Offer accepted">Offer Accepted</option>
                    </select>
                </div>
                <div className="mt-4 text-right">
                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-300" onClick={handleSave}>Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default EditPostPage;
