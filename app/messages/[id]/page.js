"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import CardAnimatedBorderGradient from '@/app/components/CardanimationGarient'
import { Domine } from 'next/font/google'




const page = ({ params }) => {


  const [link, setlink] = useState("")
  const [domain, setdomain] = useState("")
  const [messages, setmessages] = useState([])
  const showmessages = async () => {
    const data = await fetch("/api/sendmessages", {
      method: "POST",
      body: JSON.stringify({ id: params.id })
    })
    const finaldata = await data.json()
    if (finaldata.success) {
      setmessages(finaldata.data)
    }
  }

  const router = useRouter()
  useEffect(() => {
    setdomain(window.location.href.replace("messages", "sender"))
    setdomain(window.location.href.replace("http", "https"))
    const id = localStorage.getItem("id")
    if (!id) {
      router.push(`/sender/${params.id}`)
    }
    if (id !== params.id) {
      router.push(`/sender/${params.id}`)
    }
    showmessages()

  }, [])

  const handlecopy = () => {
    navigator.clipboard.writeText(domain)

  }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-20 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className='mt-16 flex justify-center  px-6 md:mt-32 container'>
        <CardAnimatedBorderGradient>

          <div className=' md:m-5  flex flex-col items-center  gap-3 relative '>

            <div className='bg-black border-[.5px] text-white border-gray-800 p-2 md:text-base text-sm  md:w-fit h-fit rounded-md '>
              Send this message to your frients so that they can send you messages secreately < span className="text-blue-400 break-all underline"><a href={domain}>{ domain}</a></span>
            </div>
            <div className='p-4 w-full flex items-center justify-center gap-3 flex-col'>
              <div className="text-white bg-green-500 p-2 rounded-md "><a href={`whatsapp://send?text=${domain}`} data-action="share/whatsapp/share">Whatsapp</a>
              </div>
              <div className="text-white bg-blue-600 p-2 rounded-md"> <a href={`http://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(domain)}`}>facebook</a></div>
            </div>
            <div className="text-white invert absolute bottom-2 right-2" onClick={handlecopy} >
              <lord-icon target="div" loading="interaction" trigger="hover" src="https://media.lordicon.com/icons/system/regular/99-copy.json">
                <img alt="" loading="eager" src="https://media.lordicon.com/icons/system/regular/99-copy.svg" />
              </lord-icon></div>
          </div>
        </CardAnimatedBorderGradient>
      </div>

      <div className='w-full  mt-7 flex justify-center md:px-96 px-6 container'>
        <div className='w-full px-6 py-4 bg-gray-950 border-[1px] modifiedscrollbar border-gray-500  md:h-64 h-44 rounded-md overflow-auto'>
          <h2 className='w-full text-center mb-2 text-white font-semibold'>Your massages</h2>
          {
            messages.map((e, i) => {
              return <div key={i} className={`w-full border  h-fit break-all ${(i + 1) % 2 == 0 ? "bg-gray-800" : "bg-gray-900"} text-white text-sm p-1 border-gray-600`}>
                {e}
              </div>
            })
          }
        </div>
      </div>

    </>
  )
}

export default page