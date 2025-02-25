"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField"; // Se estiver usando um componente de input reutilizável
import { classesData } from "@/lib/data"; // Ou qualquer outro dado que você tenha para supervisores

type Class = {
    id: number;
    name: string;
    capacity: number;
    grade: number;
    supervisor: string;
};

const schema = z.object({
    name: z.string().min(1, { message: "Class name is required!" }),
    capacity: z.number().min(1, { message: "Capacity must be at least 1!" }),
    grade: z.number().min(1, { message: "Grade must be at least 1!" }),
    supervisor: z.string().min(1, { message: "Supervisor is required!" }),
});

type Inputs = z.infer<typeof schema>;

const ClassForm = ({
    type,
    data,
    onSubmit,
}: {
    type: "create" | "update";
    data?: Class;
    onSubmit: (data: Inputs) => void;
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: data?.name || "",
            capacity: data?.capacity || 1,
            grade: data?.grade || 1,
            supervisor: data?.supervisor || "",
        },
    });

    const handleFormSubmit = handleSubmit((formData) => {
        onSubmit(formData);
    });

    return (
        <form
            className="flex flex-col gap-8 p-4 bg-white rounded-md shadow-md"
            onSubmit={handleFormSubmit}
        >
            <h2 className="text-lg font-semibold">
                {type === "create" ? "Create" : "Update"} Class
            </h2>

            <div className="flex flex-col gap-4">
                {/* Class Name */}
                <InputField
                    label="Class Name"
                    name="name"
                    register={register}
                    error={errors.name}
                    placeholder="Enter class name"
                />

                {/* Capacity */}
                <InputField
                    label="Capacity"
                    name="capacity"
                    register={register}
                    error={errors.capacity}
                    type="number"
                    placeholder="Enter class capacity"
                />

                {/* Grade */}
                <InputField
                    label="Grade"
                    name="grade"
                    register={register}
                    error={errors.grade}
                    type="number"
                    placeholder="Enter grade"
                />

                {/* Supervisor */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">
                        Select Supervisor
                    </label>
                    <select
                        {...register("supervisor")}
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                    >
                        {classesData.map((classData) => (
                            <option
                                key={classData.id}
                                value={classData.supervisor}
                            >
                                {classData.supervisor}
                            </option>
                        ))}
                    </select>
                    {errors.supervisor && (
                        <p className="text-xs text-red-400">
                            {errors.supervisor.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-4 p-2 rounded-md bg-lamaYellow text-white"
                >
                    {type === "create" ? "Create" : "Update"} Class
                </button>
            </div>
        </form>
    );
};

export default ClassForm;
