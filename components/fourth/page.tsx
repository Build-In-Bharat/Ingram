"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import ReactPlayer from "react-player";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

interface CardData {
  imageSrc: string;
  videoUrl: string;
  title: string;
  subtitle: string;
}

const Fourth: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const cardsData: CardData[] = [
    {
      imageSrc: "/Video1.png",
      videoUrl: "https://youtu.be/H66l6QHE89c",
      title: "Put AI to work for you",
      subtitle: "Experience superb-quality video calls in any app. Windows Studio Effects dynamically responds to you and your environment to automatically adjust your lighting, filter background noise and movement, keep you in the frame, and more."
    },
    {
      imageSrc: "/Video2.png",
      videoUrl: "https://youtu.be/ZKBl9uUMW-I",
      title: "Put AI to work for you",
      subtitle: "Experience superb-quality video calls in any app. Windows Studio Effects dynamically responds to you and your environment to automatically adjust your lighting, filter background noise and movement, keep you in the frame, and more."
    },
    {
      imageSrc: "/Video3.png",
      videoUrl: "https://youtu.be/_8eyJc5kmcc",
      title: "Put AI to work for you",
      subtitle: "Experience superb-quality video calls in any app. Windows Studio Effects dynamically responds to you and your environment to automatically adjust your lighting, filter background noise and movement, keep you in the frame, and more."
    },
    {
      imageSrc: "/Video4.png",
      videoUrl: "https://youtu.be/lz3-Hojjeh4",
      title: "A new AI era at work",
      subtitle: "Experience superb-quality video calls in any app. Windows Studio Effects dynamically responds to you and your environment to automatically adjust your lighting, filter background noise and movement, keep you in the frame, and more."
    },
  ];

  const openDialog = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setCurrentVideoUrl("");
  };

  return (
    <section className="bg-[#010b1a] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-16 w-[80vw] mx-auto">
          {/* Main video */}
          <div className="w-full">
            <div
              onClick={() => openDialog(cardsData[0].videoUrl)}
              className="relative w-full aspect-video overflow-hidden shadow-lg group cursor-pointer rounded-lg"
              style={{
                backgroundImage: `url(${cardsData[0].imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-3xl flex gap-3 items-center">
                  Play Video <IconPlayerPlayFilled size={40} />
                </span>
              </div>
            </div>
            <div className="text-center mt-6">
              <h2 className="text-3xl font-semibold mb-3">{cardsData[0].title}</h2>
              <p className="text-lg max-w-3xl mx-auto">{cardsData[0].subtitle}</p>
            </div>
          </div>

          {/* Smaller videos */}
          <div className="grid grid-cols-3 gap-8 w-full">
            {cardsData.slice(1).map((card, index) => (
              <div key={index} className="flex flex-col">
                <div
                  onClick={() => openDialog(card.videoUrl)}
                  className="relative aspect-video overflow-hidden shadow-lg group cursor-pointer rounded-lg"
                  style={{
                    backgroundImage: `url(${card.imageSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xl flex gap-2 items-center">
                      Play <IconPlayerPlayFilled size={24} />
                    </span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogOverlay className="fixed inset-0 bg-[#0f172a] bg-opacity-75 flex justify-center items-center z-50">
          <DialogContent className="bg-[#1f2937] p-6 rounded-lg max-w-3xl w-full text-white">
            <ReactPlayer url={currentVideoUrl} controls width="100%" />
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </section>
  );
};

export default Fourth;
