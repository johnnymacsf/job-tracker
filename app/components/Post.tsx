
interface PostProps {
    id: string;
    jobTitle: string;
    companyName: string;
    status: string;
    description: string | null; // Use null for optional or nullable fields
  }

export default function Post({id, jobTitle, companyName, status, description}: PostProps) {
    return(
        <div>
            <h3>{jobTitle}</h3>
            <h3>{companyName}</h3>
            <h3>{status}</h3>
            <h3>{description}</h3>
        </div>
    )
}