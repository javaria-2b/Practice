import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='flex min-h-screen flex-col items-center p-24'>
        <Link href={"/blogs"} className="text-xl font-bold text-blue-800">Blogs</Link>
        <Link href={"/contact-us"} className="text-xl font-bold text-blue-800">Contact</Link>
        <Link href={"/dummy-website"} className="text-xl font-bold text-blue-800">Dummy Website</Link>
        <Link href={"/group-layout"} className="text-xl font-bold text-blue-800">Group Layout</Link>
        <Link href={"/blog"} className="text-xl font-bold text-blue-800">Dymanic Blog</Link>
      </div>
    </main>
  )
} 