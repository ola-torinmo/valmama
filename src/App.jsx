// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import React, { useState } from 'react'
import celebrant from "../src/assets/val.jpg"
import birthday from "../src/assets/val.json"
import confec from "../src/assets/confec.json"
// import { Player } from '@lottiefiles/react-lottie-player';
// import { X } from 'lucide-react';

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
  

//   return (
//     <>
//      <div className="min-h-screen w-full  bg-gradient-to-br from-blue-700 via-red-600 to-yellow-500">
//      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center">
//         {/* Image and Icon Container */}

//          {/* Top Right Number */}
//         <div className="absolute top-8 right-8 md:mt-[0px] mt-[80px]">
//           <span className="md:text-6xl text-4xl font-bold text-white ">21st</span>
//         </div>
//          {/* Bottom Right Text */}
//          <div className="absolute bottom-8 right-8">
//           <p className="md:text-4xl text-2xl font-bold text-white">OCT</p>
//           <p className="md:text-4xl text-2xl font-bold text-white">23</p>
//         </div>
//             {/* Bottom Left Button */}
//             <div className="absolute bottom-8 left-8">
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 ease-in-out"
//           >
//             From Zaydan
//           </button>
//         </div>

//         <div className=''>
//           <Player
//           src={birthday}
//           className="player absolute md:left-[23%] left-[-9%] md:-top-2 top-[12%] transform -rotate-45 md:h-[350px] h-[200px] md:w-[350px] w-[250px]"
//           loop
//           autoplay
         

//         />
//         </div>

//         <div className=''>
//           <Player
//           src={confec}
//           className="player absolute md:left-[36%] left-[-17%] md:-top-6 top-[12%]  md:h-[350px] h-[200px] md:w-[350px] w-[350px]"
//           loop
//           autoplay
          
//         />
//         </div>
       

//         <div className="relative">


//           {/* Placeholder Image */}
//           <img 
//             src={celebrant}
//             alt="celebrant"
//             className="rounded-lg shadow-xl bg-auto bg-no-repeat bg-center md:w-[280px] w-[250px] md:mt-[70px] mt-[40px]"
//           />
          
//         </div>

      

//            {/* Modal */}
//            {isModalOpen && (
//           <>
//             {/* Modal Backdrop */}
//             <div 
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//               onClick={() => setIsModalOpen(false)}
//             />
            
//             {/* Modal Content */}
//             <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-6 z-50 w-full max-w-md">
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900">Message fron Zaydan</h2>
//                   <p className="text-gray-500 mt-1">Hey, Happy Birthday Najhan!</p>
//                 </div>
//                 <button 
//                   onClick={() => setIsModalOpen(false)}
//                   className="text-gray-400 hover:text-gray-500 transition-colors"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>
              
//               <div className="space-y-4">
//                 <div className=" ">
//                   <p className="text-sm font-medium text-gray-500"> I’ve been thinking about what to write for a while and realized that no words could fully describe you. Maybe it’s because you’re beyond imagination, or perhaps because when God made you, He made sure there weren’t enough words to capture your essence. From the way you walk and talk to your smile that lights up the world, Together, we turn life’s challenges into beautiful moments.</p>
                  
//                 </div>
//                 <div className="">
//                   <p className="text-sm font-medium text-gray-500"> I love the way you let your guard down and trust me with your heart. It’s an honor, especially knowing the world hasn’t always been kind. But there’s magic in that, in how you bloom despite everything. You’re the flower I want to protect through every storm and winter. I’ll be here, ears perked at the sound of your name, ready to stand by your side, to carry the weight of the world when it feels too heavy. You give me strength, just as I hope to give you peace.</p>
                 
//                 </div>
//                 <div className="">
//                   <p className="text-sm font-medium text-gray-500"> You’re a gift, a blessing, and I thank God every day that He drew you into my life. You planted a seed in me that has grown into something beautiful—peace, love, and understanding. I see the light in you, and I’m honored that you see the same in me. Together, we’ll continue growing, weathering every storm, and cherishing every sunrise. Omo Jagunna, you’re one of a kind, and I love you for it.</p>
                 
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
      

//      </div>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { X } from 'lucide-react';

const ValentineBackground = () => (
  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="35%" stopColor="#fffafa"/>
        <stop offset="65%" stopColor="#fff7f7"/>
        <stop offset="100%" stopColor="#ffffff"/>
      </linearGradient>
      
      <pattern id="heartPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M50 35 C50 25, 40 15, 25 15 C10 15, 0 25, 0 40 C0 60, 20 70, 50 90 C80 70, 100 60, 100 40 C100 25, 90 15, 75 15 C60 15, 50 25, 50 35" 
              fill="#ffb3b3" opacity="0.3"/>
        <path d="M75 10 C75 5, 70 0, 63 0 C55 0, 50 5, 50 12 C50 22, 60 27, 75 37 C90 27, 100 22, 100 12 C100 5, 95 0, 87 0 C80 0, 75 5, 75 10" 
              fill="#ffc6c6" opacity="0.25"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#bgGradient)"/>
    <rect width="100%" height="100%" fill="url(#heartPattern)"/>
  </svg>
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <ValentineBackground />
      
      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center relative">
        {/* Top Right Number */}
        <div className="absolute top-8 right-8 md:mt-0 mt-20">
          <span className="md:text-6xl text-4xl font-bold text-pink-500">Feb</span>
        </div>

        {/* Bottom Right Text */}
        <div className="absolute bottom-8 right-8">
          <p className="md:text-4xl text-2xl font-bold text-pink-500">14th</p>
          {/* <p className="md:text-4xl text-2xl font-bold text-pink-500">23</p> */}
        </div>

        {/* Bottom Left Button */}
        <div className="absolute bottom-8 left-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-pink-500/10 border border-pink-500/20 text-pink-500 rounded-lg hover:bg-pink-500/20 transition-all duration-300 ease-in-out"
          >
            From Daddy
          </button>
        </div>

        <div className="relative">
          <Player
            src={birthday}
            className="player absolute md:left-[-400px]  left-[-250px] md:-top-[70px] top-[-100px] transform -rotate-45 md:h-[350px] h-[200px] md:w-[350px] w-[250px]"
            loop
            autoplay
          />
        </div>

        {/* <div className="relative">
          <Player
            src={confec}
            className="player absolute md:left-[36%] left-[-17%] md:-top-6 top-[12%] md:h-[350px] h-[200px] md:w-[350px] w-[350px]"
            loop
            autoplay
          />
        </div> */}

        <div className="relative">
          <img 
            src={celebrant}
            alt="celebrant"
            className="rounded-lg shadow-xl bg-auto bg-no-repeat bg-center md:w-[280px] w-[250px] md:mt-[70px] mt-[40px]"
          />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsModalOpen(false)}
            />
            
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-6 z-50 w-full max-w-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Message from Daddy</h2>
                  <p className="text-gray-500 mt-1">Hey, Happy Valentines Mama</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Before you, love was just a word, something I'd read in books and watched in movies, it felt distant like it wasn't meant for me, it was always Cinderella and Prince Charming, but then you came along and everything changed.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">You showed me the true meaning of love, from the way you speak to me, to the way your sense of humor brightens up my day, You've taught me that love is comfort and passion.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">You've taught me that love isn't about losing oneself; you've turned love into something solid and true for me, and for that, for you, I am endlessly grateful.</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
