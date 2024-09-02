import React from 'react';

interface CardData {
  imageSrc: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

const Fourth: React.FC = () => {
  const cardsData: CardData[] = [
    {
      imageSrc: "/turtules.svg",
      title: "Create your vision",
      subtitle: "Cocreator5",
      ctaText: "Watch now",
    },
    {
      imageSrc: "/language.svg",
      title: "Real-time subtitles",
      subtitle: "Live Captions1",
      ctaText: "Watch now",
    },
    {
      imageSrc: "/filters.svg",
      title: "Creative filters",
      subtitle: "Windows Studio Effects",
      ctaText: "Watch now",
    },
  ];

  return (
    <section className="bg-[#0f172a] py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">How Copilot+ PCs help your business</h2>
        <p className="mb-10 text-lg max-w-3xl mx-auto">
          Accelerate success with a turbocharged NPU for an unmatched experience with lightning speed and smooth performance. Copilot+ PCs bring intelligent edge computing to your desktop experience.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="relative w-full max-w-xs h-96 overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${card.imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-black text-start">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-sm mb-2">{card.subtitle}</p>
                </div>
                <a href="#" className="text-blue-800 font-bold hover:text-blue-100 hover:underline text-sm">{card.ctaText} &gt;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fourth;
