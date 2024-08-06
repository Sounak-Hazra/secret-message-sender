"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import CardAnimatedBorderGradient from "./components/CardanimationGarient";
import {v4} from "uuid"
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

  const router = useRouter()

  const [checkbox, setcheckbox] = useState(false)

  useEffect(() => {
  }, [checkbox])
  
  const handledisabled = () => {
    toast.info("Check the check box !")
  }

  const handlegenerate = async () => {
    console.log("disabled")
    try {
      const previousid = localStorage.getItem("id")
      if (previousid) {
        router.push(`/messages/${previousid}`)
      }
      else {
        
        const id =v4()
        console.log(id)
        localStorage.setItem("id", id)
        const responce = await fetch("/api/createnewuser", {
          method: "POST",
          body:JSON.stringify({id:id})
        })
        const finalres = await responce.json()
        if (finalres.success) {
          router.push(`/messages/${id}`) 
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  // onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}



  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main>

        <div className="flex items-center justify-center px-2 mt-40">
          <CardAnimatedBorderGradient>
            <div className="bg-gray-950 py-4  md:mx-auto  rounded-lg ">
              <div className="p-2">
                <ol className="p-3">
                  <li className="my-2">Enter your Name, Create Secret Message link and Share with your friends on Whatsapp, Facebook.</li>
                  <li className="my-2">Get unknown feedback from your friends, co-workers, and Fans.</li>
                  <li className="my-2">Once your friends send you a message, you will see the results on a Message board.</li>
                </ol>
              </div>
              <div className="flex justify-between px-5">
                <div className="flex gap-2 justify-center items-center">
                  <input type="checkbox" onChange={(e)=>setcheckbox(!checkbox)} />
                  <div>I agree to Terms and condition of website</div>
                </div>
                <div className="bg-gre">
                  <button onClick={checkbox ? handlegenerate : handledisabled} className='inline-flex h-fit md:py-4 md:text-base text-xs animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
                    Create your own link 
                  </button>
                </div>
              </div>



            </div>
          </CardAnimatedBorderGradient>
        </div>
        

      </main>
    </>
  );
}
