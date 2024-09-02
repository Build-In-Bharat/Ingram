"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { formSchema } from '@/lib/validation';
import { useFormStore } from '@/lib/store'; // Import the Zustand store

const Second: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { control, register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(formSchema)
  });

  const { formData, setFormData } = useFormStore(); // Get Zustand store data and setter

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  // Update Zustand store on form field change
  const handleInputChange = (field: string, value: any) => {
    setFormData({ [field]: value });
  };

  return (
    <div className="bg-[#0A2540] text-white py-16 px-6 container mx-auto min-w-full m-0 p-0"> {/* Added m-0 p-0 */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-evenly space-y-8 md:space-y-0">
          <div className="w-full md:w-1/5 flex justify-center">
            <Image
              src="/Second_image.svg"
              alt="Guide Image"
              width={350}
              height={450}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-3xl lg:4xl font-bold mb-4">
              Ensure smooth sailing towards <br></br>Windows 10 end of support!
            </h2>
            <Dialog open={isDialogOpen} onOpenChange={toggleDialog}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-6 px-6 rounded shadow-md text-lg transition-all">
                  Download Guide
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#010B1A] text-white border-none rounded-xl">
                <DialogHeader>
                  <DialogTitle>Download Guide</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-[80vh]">
                  <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-white">Name</label>
                      <Input
                        type="text"
                        {...register('name')}
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                      {errors.name && <p className="text-red-500">{String(errors.name.message)}</p>}
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-white">Designation</label>
                      <Input
                        type="text"
                        {...register('designation')}
                        value={formData.designation}
                        onChange={(e) => handleInputChange('designation', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                      {errors.designation && <p className="text-red-500">{String(errors.designation.message)}</p>}
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-white">Business Email</label>
                      <Input
                        type="email"
                        {...register('email')}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                      {errors.email && <p className="text-red-500">{String(errors.email.message)}</p>}
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-white">Organization Name</label>
                      <Input
                        type="text"
                        {...register('organization')}
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
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
                            value={formData.organizationSize}
                            onValueChange={(value) => {
                              field.onChange(value);
                              handleInputChange('organizationSize', value);
                            }}
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
                            value={formData.upgradePlan}
                            onValueChange={(value) => {
                              field.onChange(value);
                              handleInputChange('upgradePlan', value);
                            }}
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
                            checked={formData.consent}
                            className="mr-2"
                            onCheckedChange={(checked) => {
                              field.onChange(checked === true);
                              handleInputChange('consent', checked === true);
                            }}
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
    </div>
  );
};

export default Second;
