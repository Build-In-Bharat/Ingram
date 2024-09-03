"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { DialogForm } from "../DialogForm";

const Third: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="bg-gray-900 text-white pt-14 font-sans container mx-auto min-w-full">
      <div className="max-w-screen mx-auto flex flex-col">
        <div className="mb-8 w-70 text-justify px-10 pb-10">
          <div className="text-cyan-300 text-3xl mb-4 flex justify-start">
            "We&apos;re able to do a lot of things much faster, much more
            efficiently. Windows 11 Pro made my whole team very effective."
          </div>
          <div className="text-white">
            <div className="font-bold text-lg">
              Jeyalakshmi Venkatanarayanan
            </div>
            <div className="text-md"> Founder, Universe Power</div>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-1/3">
            <Image
              src="/Third_comp.svg"
              alt="Windows 11 Pro laptop"
              className="w-full"
              width={200}
              height={200}
            />
          </div>

          <div className="w-2/3">
            <div className="flex items-center mb-4">
              <Image
                src="/copilot.svg"
                alt="Copilot logo"
                className="mr-2 w-6 h-6"
                width={24}
                height={24}
              />
              <span className="text-xl">Copilot + PC</span>
            </div>

            <h2 className="text-3xl font-bold mb-4">A new AI era at work</h2>

            <p className="mb-4">
              Introducing the world's fastest, most intelligent<br></br>
              Windows PCs ever. Accelerate innovation, solve<br></br>
              problems faster, and drive transformative business<br></br>
              impact with Copilot+ PCs.
            </p>

            <DialogForm
              isDialogOpen={isDialogOpen}
              toggleDialog={toggleDialog}
              buttonText="Download e-book"
              dialogTitle="Download e-book"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
