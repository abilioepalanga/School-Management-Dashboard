"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

// Define schema validation for message
const schema = z.object({
    subject: z
        .string()
        .min(3, { message: "Subject must be at least 3 characters long!" })
        .max(100, { message: "Subject must be at most 100 characters long!" }),
    content: z
        .string()
        .min(10, { message: "Content must be at least 10 characters long!" }),
    img: z.instanceof(File).optional(), // Image is optional for message
});

type Inputs = z.infer<typeof schema>;

const MessageForm = ({
    type,
    data,
}: {
    type: "create" | "update";
    data?: any;
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">
                {type === "create" ? "Create New Message" : "Update Message"}
            </h1>
            <span className="text-xs text-gray-400 font-medium">
                Message Information
            </span>

            <div className="flex justify-between flex-wrap gap-4">
                <InputField
                    label="Subject"
                    name="subject"
                    defaultValue={data?.subject}
                    register={register}
                    error={errors?.subject}
                />
                <InputField
                    label="Content"
                    name="content"
                    type="textarea"
                    defaultValue={data?.content}
                    register={register}
                    error={errors?.content}
                />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
                <label
                    className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                    htmlFor="img"
                >
                    <Image src="/upload.png" alt="" width={28} height={28} />
                    <span>Upload an image (Optional)</span>
                </label>
                <input
                    type="file"
                    id="img"
                    {...register("img")}
                    className="hidden"
                />
                {errors.img?.message && (
                    <p className="text-xs text-red-400">
                        {errors.img.message.toString()}
                    </p>
                )}
            </div>

            <button className="bg-blue-400 text-white p-2 rounded-md">
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>
    );
};

export default MessageForm;
