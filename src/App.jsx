// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React, { useState } from 'react'
import celebrant from "../src/assets/Birthday.jpeg"
import birthday from "../src/assets/birthday.json"
import confec from "../src/assets/confec.json"
import { Player } from '@lottiefiles/react-lottie-player';
import { X } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  return (
    <>
     <div className="min-h-screen w-full  bg-gradient-to-br from-blue-700 via-red-600 to-yellow-500">
     <div className="container mx-auto min-h-screen flex flex-col items-center justify-center">
        {/* Image and Icon Container */}

         {/* Top Right Number */}
        <div className="absolute top-8 right-8 md:mt-[0px] mt-[80px]">
          <span className="md:text-6xl text-4xl font-bold text-white ">21st</span>
        </div>
         {/* Bottom Right Text */}
         <div className="absolute bottom-8 right-8">
          <p className="md:text-4xl text-2xl font-bold text-white">OCT</p>
          <p className="md:text-4xl text-2xl font-bold text-white">23</p>
        </div>
            {/* Bottom Left Button */}
            <div className="absolute bottom-8 left-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 ease-in-out"
          >
            From Zaydan
          </button>
        </div>

        <div className=''>
          <Player
          src={birthday}
          className="player absolute md:left-[23%] left-[-9%] md:-top-2 top-[12%] transform -rotate-45 md:h-[350px] h-[200px] md:w-[350px] w-[250px]"
          loop
          autoplay
          // style={{ height: '350px', width: '350px' }}

        />
        </div>

        <div className=''>
          <Player
          src={confec}
          className="player absolute md:left-[36%] left-[-17%] md:-top-6 top-[12%]  md:h-[350px] h-[200px] md:w-[350px] w-[350px]"
          loop
          autoplay
          // style={{ height: '350px', width: '350px' }}

        />
        </div>
       

        <div className="relative">

        {/* <div className=''>
          <Player
          src={birthday}
          className="player absolute left-8 top-1 transform -rotate-45"
          loop
          autoplay
          style={{ height: '300px', width: '300px' }}

        />
        </div> */}

          {/* Placeholder Image */}
          <img 
            src={celebrant}
            alt="celebrant"
            className="rounded-lg shadow-xl bg-auto bg-no-repeat bg-center w-[280px] mt-[70px]"
          />
          
        </div>

        {/* Club Motto */}
        {/* <h1 className="text-6xl font-bold text-white text-center shadow-lg mt-16">
          Més que un club
        </h1> */}

           {/* Modal */}
           {isModalOpen && (
          <>
            {/* Modal Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsModalOpen(false)}
            />
            
            {/* Modal Content */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-6 z-50 w-full max-w-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Message fron Zaydan</h2>
                  <p className="text-gray-500 mt-1">Hey, Happy Birthday!</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className=" ">
                  <p className="text-sm font-medium text-gray-500"> I’ve been thinking about what to write for a while and realized that no words could fully describe you. Maybe it’s because you’re beyond imagination, or perhaps because when God made you, He made sure there weren’t enough words to capture your essence. From the way you walk and talk to your smile that lights up the world, Together, we turn life’s challenges into beautiful moments.</p>
                  {/* <p className="text-lg text-gray-900">1899</p> */}
                </div>
                <div className="">
                  <p className="text-sm font-medium text-gray-500"> I love the way you let your guard down and trust me with your heart. It’s an honor, especially knowing the world hasn’t always been kind. But there’s magic in that, in how you bloom despite everything. You’re the flower I want to protect through every storm and winter. I’ll be here, ears perked at the sound of your name, ready to stand by your side, to carry the weight of the world when it feels too heavy. You give me strength, just as I hope to give you peace.</p>
                  {/* <p className="text-lg text-gray-900">Camp Nou</p> */}
                </div>
                <div className="">
                  <p className="text-sm font-medium text-gray-500"> You’re a gift, a blessing, and I thank God every day that He drew you into my life. You planted a seed in me that has grown into something beautiful—peace, love, and understanding. I see the light in you, and I’m honored that you see the same in me. Together, we’ll continue growing, weathering every storm, and cherishing every sunrise. Omo Jagunna, you’re one of a kind, and I love you for it.</p>
                  {/* <p className="text-lg text-gray-900">Blaugrana</p> */}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      

     </div>
    </>
  )
}

export default App
