import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Main from './main/page'



export default async function Home() {

  return (
    <main className="">
      <Navbar />
      <Main />
    </main>
  )
}
