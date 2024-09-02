import Image from 'next/image';

const Fifth: React.FC = () => {
    return (
        <div className="bg-[#0f172a] relative w-full h-screen flex justify-center items-center overflow-hidden">
            <div className="flex flex-col md:flex-row justify-center items-center z-10 text-white p-6 max-w-5xl mx-auto">
                <div className="text-center md:text-left max-w-2xl absolute left-40">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl  mb-4">
                        Work <span className="font-bold">smart</span><br />
                        Work <span className="font-bold">secure</span><br />
                        Work <span className="font-bold">fast</span><br />
                        Work<span className="text-purple-600 font-bold text-7xl">Magic</span>
                    </h2>
                    <p className="text-md md:text-xl lg:text-md mb-6">
                        Leverage Windows 11 Pro devices + Microsoft 3651, the<br /> perfect pair for a secure, AI-powered cloud solution.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-md shadow-md text-lg transition-all">
                        Download Guide
                    </button>
                </div>
                <div className="md:w-1/1 absolute right-0">
                    <img src="/fifth_comp.svg" alt="WorkMagic" className="w-full h-auto object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Fifth;
