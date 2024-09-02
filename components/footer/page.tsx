import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div>
            <div className='bg-#010B1A flex justify-between p-10'>
                <div>
                    <p>Redington provides end-to-end supply chain solutions for all categories of <br />Information Technology, Telecom, Lifestyle, Healthcare, and Solar products</p>
                </div>
                <div className='flex space-x-5'>
                    <a href="#" className="flex-shrink-0">
                        <img src="/facebook.svg" alt="Windows 11" className="h-10 w-10 rounded-full" />
                    </a>
                    <a href="#" className="flex-shrink-0">
                        <img src="/X.svg" alt="Windows 11" className="h-10 w-10 rounded-full" />
                    </a>
                    <a href="#" className="flex-shrink-0">
                        <img src="/linkedin.svg" alt="Windows 11" className="h-10 w-10 rounded-full" />
                    </a>
                    <a href="#" className="flex-shrink-0">
                        <img src="/youtube.svg" alt="Microsoft 365" className="h-10 w-10" />
                    </a>
                </div>
            </div>
            <div className='bg-blue-600 flex justify-center item-center text-white p-2'>
                <p>copyright @copy 2024 Redington</p>
            </div>
        </div>
    );
};

export default Navbar;
