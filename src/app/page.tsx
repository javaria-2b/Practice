import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <Link href={"/blogs"} className='flex items-center text-2xl font-bold text-center'>Blogs</Link>
      </div>
    </main>
  )
}
