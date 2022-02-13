import Head from 'next/head';
import Feed from '../components/Feed';
import Login from '../components/Login';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { getSession } from "next-auth/client";

export default function Home({ session}) {
  if (!session) return <Login />;  


  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <Header />

      <main className="flex">
        {/* SIdebar */}
          <Sidebar />
        {/* Feed */}
          <Feed />
        {/* Widgets */}
          <Widgets /> 
      </main>

    </div>     
  );
}

/* This function to get data with server side rendering */

export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);
  // console.log(session);
  
  return { 
    props: {
        session 
      }
    }
  }
