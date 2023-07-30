import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Main from './main/page'
import LoginForm from './components/LoginForm/Login'



export default async function Home() {

  return (
    <main className="">
      <Navbar />
      {/* <Main /> */}
      <LoginForm />
    </main>
  )
}
