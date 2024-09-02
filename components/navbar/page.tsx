import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div>
            <nav className="bg-transparent fixed w-full z-20 top-0 start-0 h-50px bg-opacity-95">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex">
                            <a href="#" className="flex-shrink-0">
                                <img src="/logo.svg" alt="Logo" className="h-30 w-30" />
                            </a>
                        </div>
                        <div className="flex items-center space-x-5">
                            <a href="#" className="flex-shrink-0">
                                <img src="/windows-11.svg" alt="Windows 11" className="h-30 w-30" />
                            </a>
                            <div className="border-l border-gray-300 h-6"></div>
                            <a href="#" className="flex-shrink-0">
                                <img src="/microsoft-365.svg" alt="Microsoft 365" className="h-30 w-30" />
                            </a>
                        </div>
                        <div className="md:hidden">
                            <button className="mobile-menu-button">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
