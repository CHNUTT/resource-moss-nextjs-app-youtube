import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello, World!</h1>
      {/* 
        using Link because
        it is an optimized way provided by Next
        it will not reload all JS files, just the page contents
      */}
      <Link href="/users">Users</Link>
    </main>
  )
}
