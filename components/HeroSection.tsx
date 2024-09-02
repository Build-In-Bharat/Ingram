"use client";
import Image from 'next/image';
import { Button } from './ui/button';
import Navbar from './navbar/Navbar';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { z } from 'zod';
import { formSchema } from '@/lib/validation';

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { control, register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(formSchema)
  });

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-center overflow-hidden m-0 p-0 bg-black">
      <Image
        src="/Home_background.svg"
        alt="Background with Laptop"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <div className="absolute inset-10 z-10 flex items-center">
        <div className="text-center text-white p-6 max-w-2xl text-justify">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-customBlue">
            Support for<br></br> Windows 10 ends<br></br> soon in October 25.
          </h2>
          <p className="text-sm md:text-xl lg:text-sm mb-6 max-w-md">
            Support for Windows 10 is ending soon in October 2025 and devices will no longer get security and feature updates. Older devices can be less secure so delaying upgrades could be costly to your business. Ensure your organization stays protected and productive with all the latest security and feature updates with Windows 11 Pro, including Copilot your personal AI assistant.
          </p>
          <Dialog open={isDialogOpen} onOpenChange={toggleDialog}>
            <DialogTrigger asChild>
              <button
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-md shadow-md text-lg transition-all"
                onClick={toggleDialog}
              >
                Contact Us
              </button>
            </DialogTrigger>
            <DialogContent className="bg-[#010B1A] text-white border-none rounded-xl">
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
              </DialogHeader>
              <ScrollArea className="max-h-[80vh]">
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Name</label>
                    <Input
                      type="text"
                      {...register('name')}
                      className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.name && <p className="text-red-500">{String(errors.name.message)}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Designation</label>
                    <Input
                      type="text"
                      {...register('designation')}
                      className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.designation && <p className="text-red-500">{String(errors.designation.message)}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Business Email</label>
                    <Input
                      type="email"
                      {...register('email')}
                      className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.email && <p className="text-red-500">{String(errors.email.message)}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Organization Name</label>
                    <Input
                      type="text"
                      {...register('organization')}
                      className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.organization && <p className="text-red-500">{String(errors.organization.message)}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Size of organization</label>
                    <Controller
                      name="organizationSize"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={(value) => field.onChange(value)}
                        >
                          <SelectTrigger className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#010B1A] text-white rounded-xl">
                            <SelectItem value="Fewer than 10">Fewer than 10</SelectItem>
                            <SelectItem value="10-50">10-50</SelectItem>
                            <SelectItem value="51-200">51-200</SelectItem>
                            <SelectItem value="201-500">201-500</SelectItem>
                            <SelectItem value="More than 500">More than 500</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.organizationSize && <p className="text-red-500">{String(errors.organizationSize.message)}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Are you currently planning to upgrade or purchase new devices for your business within the next 6-12 months?</label>
                    <Controller
                      name="upgradePlan"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={(value) => field.onChange(value)}
                        >
                          <SelectTrigger className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <SelectValue placeholder="Select plan" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#010B1A] text-white rounded-xl">
                            <SelectItem value="Yes, within the next 3 months">Yes, within the next 3 months</SelectItem>
                            <SelectItem value="Yes, within the next 6 months">Yes, within the next 6 months</SelectItem>
                            <SelectItem value="Yes, within the next 12 months">Yes, within the next 12 months</SelectItem>
                            <SelectItem value="No, not at the moment">No, not at the moment</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.upgradePlan && <p className="text-red-500">{String(errors.upgradePlan.message)}</p>}
                  </div>
                  <div className="mb-4">
                    <Controller
                      name="consent"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          {...field}
                          checked={field.value}
                          className="mr-2"
                          onCheckedChange={(checked) => field.onChange(checked === true)}
                        />
                      )}
                    />
                    <label className="text-sm font-medium text-white">I am ok to be contacted by Ingram Micro and its partners for their products and services</label>
                    {errors.consent && <p className="text-red-500">{String(errors.consent.message)}</p>}
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all"
                  >
                    Submit
                  </button>
                </form>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
