"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField"; // Supondo que você tenha um componente de input reutilizável
import {
    lessonsData,
    subjectsData,
    classesData,
    teachersData,
} from "@/lib/data"; // Dados fictícios

type Lesson = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
};

const schema = z.object({
    subject: z.string().min(1, { message: "Subject is required!" }),
    class: z.string().min(1, { message: "Class is required!" }),
    teacher: z.string().min(1, { message: "Teacher is required!" }),
});

type Inputs = z.infer<typeof schema>;

const LessonForm = ({
    type,
    data,
    onSubmit,
}: {
    type: "create" | "update";
    data?: Lesson;
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
            subject: data?.subject || "",
            class: data?.class || "",
            teacher: data?.teacher || "",
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
                {type === "create" ? "Create" : "Update"} Lesson
            </h2>

            <div className="flex flex-col gap-4">
                {/* Subject */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">
                        Select Subject
                    </label>
                    <select
                        {...register("subject")}
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                    >
                        {subjectsData.map((subject) => (
                            <option key={subject.id} value={subject.name}>
                                {subject.name}
                            </option>
                        ))}
                    </select>
                    {errors.subject && (
                        <p className="text-xs text-red-400">
                            {errors.subject.message}
                        </p>
                    )}
                </div>

                {/* Class */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">
                        Select Class
                    </label>
                    <select
                        {...register("class")}
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                    >
                        {classesData.map((cls) => (
                            <option key={cls.id} value={cls.name}>
                                {cls.name}
                            </option>
                        ))}
                    </select>
                    {errors.class && (
                        <p className="text-xs text-red-400">
                            {errors.class.message}
                        </p>
                    )}
                </div>

                {/* Teacher */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">
                        Select Teacher
                    </label>
                    <select
                        {...register("teacher")}
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                    >
                        {teachersData.map((teacher) => (
                            <option key={teacher.id} value={teacher.name}>
                                {teacher.name}
                            </option>
                        ))}
                    </select>
                    {errors.teacher && (
                        <p className="text-xs text-red-400">
                            {errors.teacher.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-4 p-2 rounded-md bg-lamaYellow text-white"
                >
                    {type === "create" ? "Create" : "Update"} Lesson
                </button>
            </div>
        </form>
    );
};

export default LessonForm;
