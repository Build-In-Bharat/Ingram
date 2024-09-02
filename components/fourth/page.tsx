"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ReactPlayer from 'react-player';

interface CardData {
  imageSrc: string;
  title: string;
  subtitle: string;
  ctaText: string;
  videoUrl: string;
}

const Fourth: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const cardsData: CardData[] = [
    {
      imageSrc: "/Video1.png",
      title: "Recall almost anything anywhere.",
      subtitle: "Use recall to search across your personal timeline, apps, documents, and communications to find and predict the most relevant content. With just a few words, describe it to find it using natural language options",
      ctaText: "Watch now",
      videoUrl: "https://drive.google.com/file/d/1MCJlxdgMzTEJs4f1j21ky8wf8SD6FRae/view?t=1",
    },
    {
      imageSrc: "/Video2.png",
      title: "Keep communication flowing effortlessly",
      subtitle: "Using live captions with translation,2 you can understand almost any video call or recording with real-time translation from 40+ languages into English.",
      ctaText: "Watch now",
      videoUrl: "https://www.example.com/video2",
    },
    {
      imageSrc: "/Video3.png",
      title: "Put AI to work for you",
      subtitle: "Experience superb-quality video calls in any app. Windows Studio Effects dynamically responds to you and your environment to automatically adjust your lighting, filter background noise and movement, keep you in the frame, and more.",
      ctaText: "Watch now",
      videoUrl: "https://www.example.com/video3",
    },
    {
      imageSrc: "/Video4.png",
      title: "A new AI era at work",
      subtitle: "Introducing the world’s fastest, most intelligent Windows PCs ever. Accelerate innovation, solve problems faster, and drive transformative business impact with Copilot+ PCs.",
      ctaText: "Watch now",
      videoUrl: "https://www.example.com/video4",
    },
  ];

  const openDialog = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setCurrentVideoUrl('');
  };

  return (
    <section className="bg-[#0f172a] py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">How Copilot+ PCs help your business</h2>
        <p className="mb-10 text-lg max-w-3xl mx-auto">
          Accelerate success with a turbocharged NPU for an unmatched experience with lightning speed and smooth performance. Copilot+ PCs bring intelligent edge computing to your desktop experience.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {cardsData.map((card, index) => (
            <div key={index} className="w-full max-w-xl">
              <div
                className="relative w-full h-80 overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url(${card.imageSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <button
                  onClick={() => openDialog(card.videoUrl)}
                  className="absolute bottom-6 left-6 text-blue-600 font-bold hover:text-blue-500 hover:underline text-xl"
                >
                  {card.ctaText} &gt;
                </button>
              </div>
              <div className="p-6 text-white text-start">
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-sm mb-2">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogOverlay className="fixed inset-0 bg-[#0f172a] bg-opacity-75 flex justify-center items-center z-50">
          <DialogContent className="bg-[#1f2937] p-6 rounded-lg max-w-3xl w-full text-white">
            {/* <button
              onClick={closeDialog}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              &times;
            </button> */}
            <ReactPlayer url={currentVideoUrl} controls width="100%" />
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </section>
  );
};

export default Fourth;
