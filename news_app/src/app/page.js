import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Main from './main/page'
import LoginForm from './LoginForm/page'
import SignUpForm from './SignUp/page'



export default async function Home() {

  return (
    <main className="">
      <Navbar />
      <Main />
    </main>
  )
}
