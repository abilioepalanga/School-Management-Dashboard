"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

// USE LAZY LOADING

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
    loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <h1>Loading...</h1>,
});
const MessageForm = dynamic(() => import("./forms/MessageForm"), {
    loading: () => <h1>Loading...</h1>,
});

const ParentForm = dynamic(() => import("./forms/ParentForm"), {
    loading: () => <h1>Loading...</h1>,
});

const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
    loading: () => <h1>Loading...</h1>,
});

const ClassForm = dynamic(() => import("./forms/ClassForm"), {
    loading: () => <h1>Loading...</h1>,
});
// Adicionar funções para cada tipo de `table` que você precisa
const forms: {
    [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
    teacher: (type, data) => <TeacherForm type={type} data={data} />,
    student: (type, data) => <StudentForm type={type} data={data} />,
    message: (type, data) => <MessageForm type={type} data={data} />, // Adicionando formulário de mensagem
    // Adicione outros formulários conforme necessário
    class: (type, data) => (
        <ClassForm
            type={type}
            data={data}
            onSubmit={function (data: {
                name: string;
                capacity: number;
                grade: number;
                supervisor: string;
            }): void {
                throw new Error("Function not implemented.");
            }}
        />
    ),
    parent: (type, data) => <ParentForm type={type} data={data} />,
    subject: (type, data) => (
        <SubjectForm
            type={type}
            data={data}
            onSubmit={(data) => {
                /* handle submit */
            }}
        />
    ),
    // etc...
};

type TableType =
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement"
    | "message"; // Adicionando "message" ao tipo TableType

const FormModal = ({
    table,
    type,
    data,
    id,
}: {
    table: TableType; // Alterado para usar o tipo TableType atualizado
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
        type === "create"
            ? "bg-lamaYellow"
            : type === "update"
            ? "bg-lamaSky"
            : "bg-lamaPurple";

    const [open, setOpen] = useState(false);

    const Form = () => {
        // Verifique se o formulário existe para o `table` fornecido
        if (type === "delete" && id) {
            return (
                <form action="" className="p-4 flex flex-col gap-4">
                    <span className="text-center font-medium">
                        All data will be lost. Are you sure you want to delete
                        this {table}?
                    </span>
                    <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
                        Delete
                    </button>
                </form>
            );
        }

        // Verifique se a chave `table` existe em `forms` e se é uma função
        if (type === "create" || type === "update") {
            if (forms[table]) {
                return forms[table](type, data);
            } else {
                return (
                    <div>
                        <h1>Form for {table} not found!</h1>
                    </div>
                );
            }
        }

        return "Form not found!";
    };

    return (
        <>
            <button
                className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
                onClick={() => setOpen(true)}
            >
                <Image src={`/${type}.png`} alt="" width={16} height={16} />
            </button>
            {open && (
                <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                        <Form />
                        <div
                            className="absolute top-4 right-4 cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            <Image
                                src="/close.png"
                                alt="Close"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FormModal;
