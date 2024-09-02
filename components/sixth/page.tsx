import React from 'react';

const Sixth: React.FC = () => {
  return (
    <section className="bg-[#0f172a] text-white py-10 container mx-auto min-w-full">
      <div className="container mx-auto text-center mb-12">
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          To break new ground, you need ground-breaking devices. Windows 11 Pro devices can accelerate workflows and collaboration 50% on average. With experiences that elevate the potential of everyone on your team.
        </p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="p-6 max-w-xs text-start">
          <img src="/sixth_card.svg" alt="FPO Product Name" className="w-full h-auto object-contain mb-4" />
          <h3 className="font-semibold text-lg mb-2">FPO Product Name</h3>
          <p className="text-sm text-gray-300 mb-6">Product spec, information, and details go here</p>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg inline-block">
            Send Enquiry
          </a>
        </div>
        <div className="p-6 max-w-xs text-start">
          <img src="/sixth_card.svg" alt="FPO Product Name" className="w-full h-auto object-contain mb-4" />
          <h3 className="font-semibold text-lg mb-2">FPO Product Name</h3>
          <p className="text-sm text-gray-300 mb-6">Product spec, information, and details go here</p>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg inline-block">
            Send Enquiry
          </a>
        </div>
        <div className="p-6 max-w-xs text-start">
          <img src="/sixth_card.svg" alt="FPO Product Name" className="w-full h-auto object-contain mb-4" />
          <h3 className="font-semibold text-lg mb-2">FPO Product Name</h3>
          <p className="text-sm text-gray-300 mb-6">Product spec, information, and details go here</p>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg inline-block">
            Send Enquiry
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sixth;