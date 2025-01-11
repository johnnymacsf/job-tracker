import DeletePostButton from "./DeletePostButton";
import EditPostButton from "./EditPostButton";

interface PostProps {
    id: string;
    jobTitle: string;
    companyName: string;
    status: string;
    description: string | null;
  }

export default function Post({id, jobTitle, companyName, status, description}: PostProps) {
    console.log(status)
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Interviewing':
            case 'interviewing':
                return 'text-blue-500'; 
            case 'Rejected':
            case 'rejected':
                return 'text-red-500'; 
            case 'Pending':
            case 'pending':
                return 'text-yellow-500'; 
            case 'Job Offered':
            case 'Job offered':
                return 'text-green-500';
            case 'Offer accepted':
                return 'text-green-700'
            default:
                return 'text-gray-600';
        }
      };

    return(
        <div className="relative border border-gray-600 shadow-lg rounded-lg p-6 bg-white text-black h-full flex flex-col items-center">
            <div className="absolute top-2 left-2">
                <DeletePostButton postId={id} />
            </div>
            <div className="absolute top-2 right-2">
                <EditPostButton postId={id} />
            </div>
            <h3 className="text-2xl font-bold border-b-2 border-gray-300">{jobTitle}</h3>
            <h3 className="text-xl italic">{companyName}</h3>
            <h3 className={`text-xl mt-2 text-center ${getStatusColor(status)}`}>{status}</h3>
            <h3>{description}</h3>
        </div>
    )
}