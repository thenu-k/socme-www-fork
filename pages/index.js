import { useAuth } from '@/hooks/useAuth'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

export default function Home() {
  const {user,  login } = useAuth({
      middleware: 'guest',
      //redirectIfAuthenticated: '/authtest',
  })
  const name = 'thenu'
  const email  = 'thenu@thenu.com'
  const password = '12345678'
  const [errors, setErrors] = useState('No errors')
  const [status, setStatus] = useState('No status')
  const registerUser = () => {
    login({
      email,
      password,
      remember: false,
      setErrors,
      setStatus,
  })
  }
  useEffect(() => {
    console.log(errors, status)
  }, [errors, status])

  if(user){
    axios
    .get('/api/posts')
    .then(response => console.log(response.data))
    .catch(error => {
        if (error.response.status !== 422) throw error
        console.log(error)
    })
  }
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <>
        <p>Home</p>
        <button onClick={registerUser}>Login</button>
      </>
    </>
  )
}
