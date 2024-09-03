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
    <div className=" bg-gradient-to-b from-[#010b1a] to-[#06183E] text-white pt-14 font-sans container mx-auto min-w-full">
      <div className="max-w-screen mx-auto flex flex-col">
        <div className="mb-8 w-70 text-justify px-24 pb-10 ">
          <div className="text-[#50aed8] font-bold text-4xl mb-4 flex flex-col justify-between gap-3">
            <span>"We&apos;re able to do a lot of things much faster, much more
              efficiently.</span> <span className="ml-4">Windows 11 Pro made my whole team very effective."</span>
          </div>
          <div className="text-white">
            <div className="font-bold text-2xl ml-4">
              Jeyalakshmi Venkatanarayanan
            </div>
            <div className="text-xl ml-4"> Founder, Universe Power</div>
          </div>
        </div>

        <div className="flex gap-x-12 items-center">
          <div className="">
            <Image
              src="/Third_comp.svg"
              alt="Windows 11 Pro laptop"
              className="w-[40vw] h-full"
              width={400}
              height={200}
            />
          </div>

          <div className="mt-12">
            <div className="flex items-center">
              <Image
                src="/copilot.svg"
                alt="Copilot logo"
                className="w-12 h-12 mr-4"
                width={80}
                height={100}
              />
              <span className="text-3xl font-semibold">Copilot + PC</span>
            </div>

            <h2 className="text-5xl my-12">A new AI era at work</h2>

            <p className="mb-4 text-lg mb-6">
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
              buttonClassNames="px-3 py-1 mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
