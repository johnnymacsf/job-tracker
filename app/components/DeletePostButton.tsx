'use client';

export default function DeletePostButton({postId}: any) {
    async function handleClick(){
        try{
            const response = await fetch(`/api/posts?postId=${postId}`, {
                method: 'DELETE'
            });

            if(response.ok){
                console.log(`Post ${postId} deleted successfully`);

                setTimeout(()=> {
                    alert("Successfully deleted application post")
                    location.reload();
                }, 2000);
            }else{
                console.error(`Failed to delete post ${postId}`);
            }
            
        }catch(error: any){
            console.error(error);
        }
    }

    return (
        <button onClick={handleClick} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400">X</button>
    )
}