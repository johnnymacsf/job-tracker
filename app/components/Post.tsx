
interface PostProps {
    id: string;
    jobTitle: string;
    companyName: string;
    status: string;
    description: string | null; // Use null for optional or nullable fields
  }

export default function Post({id, jobTitle, companyName, status, description}: PostProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Interviewing':
                return 'text-blue-500'; 
            case 'Rejected':
                return 'text-red-500'; 
            case 'Pending':
                return 'text-yellow-500'; 
            case 'Job Offered':
                return 'text-green-500';
            case 'Offer Accepted':
                return 'text-green-800'
            default:
                return 'text-gray-600';
        }
      };

    return(
        <div className="border border-gray-600 shadow-lg rounded-lg p-6 bg-white text-black h-full flex flex-col items-center">
            <h3 className="text-2xl font-bold border-b-2 border-gray-300">{jobTitle}</h3>
            <h3 className="text-xl italic">{companyName}</h3>
            <h3 className={`text-xl mt-2 text-center ${getStatusColor(status)}`}>{status}</h3>
            <h3>{description}</h3>
        </div>
    )
}