import Link from "next/link";
export default function Navbar(){
  const item=(href:string,label:string)=>(
    <Link className="px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800" href={href}>{label}</Link>
  );
  return (
    <nav className="flex gap-2 mb-6">
      {item("/", "Home")}
      {item("/bank","Sovereign Bank")}
      {item("/avatars","Avatars")}
      {item("/metaverse","Metaverse")}
      {item("/dao","DAO")}
    </nav>
  )
}
