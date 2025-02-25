"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField"; // Se estiver usando um InputField reutilizável
import { role, subjectsData } from "@/lib/data"; // Você pode importar os dados necessários de professores ou outras fontes

type Subject = {
    id: number;
    name: string;
    teachers: string[];
};

const schema = z.object({
    name: z.string().min(1, { message: "Subject name is required!" }),
    teachers: z
        .array(z.string())
        .min(1, { message: "At least one teacher is required!" }),
});

type Inputs = z.infer<typeof schema>;

const SubjectForm = ({
    type,
    data,
    onSubmit,
}: {
    type: "create" | "update";
    data?: Subject;
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
            teachers: data?.teachers || [],
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
                {type === "create" ? "Create" : "Update"} Subject
            </h2>

            <div className="flex flex-col gap-4">
                <InputField
                    label="Subject Name"
                    name="name"
                    register={register}
                    error={errors.name}
                    placeholder="Enter subject name"
                />

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">
                        Select Teachers
                    </label>
                    <select
                        {...register("teachers")}
                        multiple
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                    >
                        {/* Aqui você pode substituir os dados dos professores pela lista real */}
                        {subjectsData.map((subject) => (
                            <option key={subject.id} value={subject.name}>
                                {subject.name}
                            </option>
                        ))}
                    </select>
                    {errors.teachers && (
                        <p className="text-xs text-red-400">
                            {errors.teachers.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="mt-4 p-2 rounded-md bg-lamaYellow text-white"
                >
                    {type === "create" ? "Create" : "Update"} Subject
                </button>
            </div>
        </form>
    );
};

export default SubjectForm;
