import React from 'react';
import Image from 'next/image';

const Third: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white p-8 font-sans">
      <div className="max-w-screen mx-auto flex flex-col">
        <div className="mb-8 w-70 text-justify px-10">
          <div className="text-cyan-300 text-3xl mb-4  flex justify-center">
            "I would recommend Windows 11 Pro to any business for its
            improved security features and ease of use. It's a no-brainer
            way to keep our business devices secure, and it was such an
            easy transition."
          </div>
          <div className="text-white">
            <div className="font-bold">Neal Freeman</div>
            <div className="text-sm">Chief Digital & Technology Officer, The Broadway League</div>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-1/3 mr-8">
            <Image
              src="/Third_comp.svg" 
              alt="Windows 11 Pro laptop" 
              className="w-full"
              width={200}
              height={200}
            />
          </div>
          
          <div className="w-2/3">
            <div className="flex items-center mb-4">
              <Image 
                src="/copilot.svg" 
                alt="Copilot logo" 
                className="mr-2 w-6 h-6"
                width={24}
                height={24}
              />
              <span className="text-xl">Copilot + PC</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">A new AI era at work</h2>
            
            <p className="mb-4">
              Introducing the world's fastest, most intelligent<br></br>
              Windows PCs ever. Accelerate innovation, solve<br></br>
              problems faster, and drive transformative business<br></br>
              impact with Copilot+ PCs.
            </p>
            
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Download e-book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
