import Image from 'next/image';

const Last: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Image 
        src="/last_comp.jpg" 
        alt="Background with Laptop"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute inset-10  z-10 flex items-center">
        <div className="text-center text-white p-6 max-w-2xl text-justify">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-customBlue">
            Support for<br></br> Windows 10 ends<br></br> soon in October 25.
          </h2>
          <p className="text-sm md:text-xl lg:text-sm mb-6 max-w-md">
            Support for Windows 10 is ending soon in October 2025 and devices will no longer get security and feature updates. Older devices can be less secure so delaying upgrades could be costly to your business. Ensure your organization stays protected and productive with all the latest security and feature updates with Windows 11 Pro, including Copilot your personal AI assistant.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-md shadow-md text-lg transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Last;
