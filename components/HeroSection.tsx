"use client";
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import { useState } from "react";
import { DialogForm } from "./DialogForm";

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-center overflow-hidden m-0 p-0 bg-black">
      <Image
        src="/hero_bg.png"
        alt="Background with Laptop"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute top-0 left-0 w-full z-10 h-24 bg-white/2 backdrop-blur-[80px]">
        <Navbar />
      </div>
      <div className="absolute inset-10 z-10 flex items-center">
        <div className="text-white p-6 max-w-2xl text-justify">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-customBlue">
            Support for<br></br> Windows 10 ends<br></br> soon in October 25.
          </h2>
          <p className="text-sm md:text-xl lg:text-sm mb-6 max-w-md">
            Support for Windows 10 is ending soon in October 2025 and devices
            will no longer get security and feature updates. Older devices can
            be less secure so delaying upgrades could be costly to your
            business. Ensure your organization stays protected and productive
            with all the latest security and feature updates with Windows 11
            Pro, including Copilot your personal AI assistant.
          </p>
          <DialogForm
            isDialogOpen={isDialogOpen}
            toggleDialog={toggleDialog}
            buttonText="Contact Us"
            dialogTitle="Contact Us"
          />
        </div>
      </div>
    </div>
  );
}
