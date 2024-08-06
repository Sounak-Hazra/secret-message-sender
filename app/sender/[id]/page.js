"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const page = ({ params }) => {
  
  const router = useRouter()
  const [message, setmessage] = useState("")
  const submit = async () => {
    const responce = await fetch("/api/savemessage", {
      method: "POST",
      body:JSON.stringify({id:params.id,message:message})
    })
    const finalresponce = await responce.json()
    if (finalresponce.success) {
      setmessage("")
      return new Promise((resolve, reject) => {
        resolve()
      })
    }
    else {
      return new Promise((resolve, reject) => {
        reject()
      })
    }
  }
  const generatenewlink = () => {
    router.push("/")
  }
  useEffect(() => {
    const id = localStorage.getItem("id")
    if (id === params.id) {
      router.push(`/messages/${params.id}`)
    }
  }, [])
  const notify = async () => {
    toast.promise(submit, {
      pending: "Sending message",
      success: "Message send successfully",
      error: "Mesage send unssucessfull"
    })
  }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className='my-24 flex flex-col items-center justify-center gap-5 px-6  '>
        <div>
          <span className='text-white'>
            Sent massage to your friend secretely He/She will never see who send this message...
          </span>
        </div>
        <textarea placeholder='type the message hear' className='w-full h-40 rounded-lg modifiedscrollbar text-sm p-2 bg-gray-950 text-white font-bold overflow-y-auto overflow-x-hidden focus:border focus:border-gray-800' value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
        <button className='text-white mt-2 bg-gray-800' onClick={()=>notify()}><a href="#_" className="relative px-6 py-3 font-bold text-white rounded-lg group">
          <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-gray-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-gray-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
          <span className="relative">Sent message</span>
        </a></button>
      </div>
      <div>
        <div className='w-full flex items-center justify-center'>
        <button className='text-white mt-2 bg-gray-800' onClick={generatenewlink}><a href="#_" className="relative px-6 py-3 font-bold text-white rounded-lg group">
          <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-gray-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-gray-900 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
          <span className="relative">Make your own massage reciver</span>
        </a></button>
        </div>
      </div>
    </>
  )
}

export default page

