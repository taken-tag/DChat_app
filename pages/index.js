import Head from 'next/head'
import {useMoralis} from "react-moralis"
import Header from '../Components/Header';
import Login from '../Components/Login';
import Message from '../Components/Message';
export default function Home() {


const {isAuthenticated, logout} = useMoralis();

  if(!isAuthenticated) return <Login/>;

  return (
    <div  className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-red-900 overflow-hidden">
      <Head>
        <title>Meta Verse App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="max-w-screen-2xl mx-auto ">
        <Header/>

        {/* messages */}
        <Message/>
        </div>
          </div>      

       
  )
}
 