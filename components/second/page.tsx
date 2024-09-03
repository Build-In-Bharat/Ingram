"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { DialogForm } from "../DialogForm"; // Import the new DialogForm component

const Second: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="bg-[#0A2540] text-white py-16 px-6 container mx-auto min-w-full m-0 p-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-evenly space-y-8 md:space-y-0">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/Second_image.svg"
              alt="Guide Image"
              width={350 * 2}
              height={450 * 2}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-3xl lg:4xl font-bold mb-4">
              Ensure smooth sailing towards <br></br>Windows 10 end of support!
            </h2>
            <DialogForm
              isDialogOpen={isDialogOpen}
              toggleDialog={toggleDialog}
              buttonText="Download Guide"
              dialogTitle="Download Guide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
