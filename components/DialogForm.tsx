import React, { useEffect } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "@/lib/validation";
import { useFormStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

interface DialogFormProps {
    isDialogOpen: boolean;
    toggleDialog: () => void;
    buttonText: string;
    dialogTitle: string;
}

export const DialogForm: React.FC<DialogFormProps> = ({
    isDialogOpen,
    toggleDialog,
    buttonText,
    dialogTitle,
}) => {
    const { formData, setFormData } = useFormStore();

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: formData,
    });

    useEffect(() => {
        // Update form values when formData changes
        Object.entries(formData).forEach(([key, value]) => {
            setValue(key as any, value);
        });
    }, [formData, setValue]);

    const onSubmit = (data: any) => {
        console.log(data);
        setFormData(data);
        toggleDialog();
    };

    const handleInputChange = (field: string, value: any) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={toggleDialog}>
            <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-6 px-6 rounded shadow-md text-lg transition-all">
                    {buttonText}
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#010B1A] text-white border-none rounded-xl">
                <DialogHeader>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-[80vh]">
                    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">
                                Name
                            </label>
                            <Input
                                type="text"
                                {...register("name")}
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.name && (
                                <p className="text-red-500">{String(errors.name.message)}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">
                                Designation
                            </label>
                            <Input
                                type="text"
                                {...register("designation")}
                                value={formData.designation}
                                onChange={(e) =>
                                    handleInputChange("designation", e.target.value)
                                }
                                className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.designation && (
                                <p className="text-red-500">
                                    {String(errors.designation.message)}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">
                                Business Email
                            </label>
                            <Input
                                type="email"
                                {...register("email")}
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.email && (
                                <p className="text-red-500">{String(errors.email.message)}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">
                                Organization Name
                            </label>
                            <Input
                                type="text"
                                {...register("organization")}
                                value={formData.organization}
                                onChange={(e) =>
                                    handleInputChange("organization", e.target.value)
                                }
                                className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.organization && (
                                <p className="text-red-500">
                                    {String(errors.organization.message)}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">
                                Size of organization
                            </label>
                            <Controller
                                name="organizationSize"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        value={formData.organizationSize}
                                        onValueChange={(value) => {
                                            field.onChange(value);
                                            handleInputChange("organizationSize", value);
                                        }}
                                    >
                                        <SelectTrigger className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                            <SelectValue placeholder="Select size" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#010B1A] text-white rounded-xl">
                                            <SelectItem value="Fewer than 10">
                                                Fewer than 10
                                            </SelectItem>
                                            <SelectItem value="10-50">10-50</SelectItem>
                                            <SelectItem value="51-200">51-200</SelectItem>
                                            <SelectItem value="201-500">201-500</SelectItem>
                                            <SelectItem value="More than 500">
                                                More than 500
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.organizationSize && (
                                <p className="text-red-500">
                                    {String(errors.organizationSize.message)}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">
                                Are you currently planning to upgrade or purchase new devices
                                for your business within the next 6-12 months?
                            </label>
                            <Controller
                                name="upgradePlan"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        value={formData.upgradePlan}
                                        onValueChange={(value) => {
                                            field.onChange(value);
                                            handleInputChange("upgradePlan", value);
                                        }}
                                    >
                                        <SelectTrigger className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-[#010B1A] text-white rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                            <SelectValue placeholder="Select plan" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#010B1A] text-white rounded-xl">
                                            <SelectItem value="Yes, within the next 3 months">
                                                Yes, within the next 3 months
                                            </SelectItem>
                                            <SelectItem value="Yes, within the next 6 months">
                                                Yes, within the next 6 months
                                            </SelectItem>
                                            <SelectItem value="Yes, within the next 12 months">
                                                Yes, within the next 12 months
                                            </SelectItem>
                                            <SelectItem value="No, not at the moment">
                                                No, not at the moment
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.upgradePlan && (
                                <p className="text-red-500">
                                    {String(errors.upgradePlan.message)}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <Controller
                                name="consent"
                                control={control}
                                render={({ field }) => (
                                    <Checkbox
                                        checked={formData.consent}
                                        className="mr-2"
                                        onCheckedChange={(checked) => {
                                            field.onChange(checked === true);
                                            handleInputChange("consent", checked === true);
                                        }}
                                    />
                                )}
                            />
                            <label className="text-sm font-medium text-white">
                                I am ok to be contacted by Ingram Micro and its partners for
                                their products and services
                            </label>
                            {errors.consent && (
                                <p className="text-red-500">{String(errors.consent.message)}</p>
                            )}
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
    );
};