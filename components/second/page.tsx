import Image from 'next/image';
import React from 'react';

const Second: React.FC = () => {
  return (
    <div className="bg-[#0A2540] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-evenly space-y-8 md:space-y-0">
          <div className="w-full md:w-1/5 flex justify-center">
            <Image
              src="/Second_image.svg"
              alt="Guide Image"
              width={350}
              height={450}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-3xl lg:3xl font-bold mb-4">
              Ensure smooth sailing towards <br></br>Windows 10 end of support!
            </h2>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-md shadow-md text-lg transition-all">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
