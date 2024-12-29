import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-4xl font-bold">
          <Link href="/">Job application Tracker</Link>
        </div>
        <div className="space-x-4">
          <Link href="/add-post" className="rounded border-2 border-white p-4 text-white hover:bg-blue-300">Add Application</Link>
        </div>
      </div>
    </nav>
  );
}