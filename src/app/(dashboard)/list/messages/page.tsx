import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { messagesData, role } from "@/lib/data"; // Certifique-se de que `messagesData` está corretamente configurado
import Image from "next/image";

type Message = {
    id: number;
    sender: string;
    subject: string;
    receivedDate: string;
    content: string;
};

const columns = [
    {
        header: "Sender",
        accessor: "sender",
    },
    {
        header: "Subject",
        accessor: "subject",
    },
    {
        header: "Received Date",
        accessor: "receivedDate",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

const MessageListPage = () => {
    const renderRow = (item: Message) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="flex items-center gap-4 p-4">{item.sender}</td>
            <td>{item.subject}</td>
            <td className="hidden md:table-cell">{item.receivedDate}</td>
            <td>
                <div className="flex items-center gap-2">
                    {role === "admin" ||
                    role === "teacher" ||
                    role === "student" ? (
                        <>
                            <FormModal
                                table="message"
                                type="update"
                                data={item}
                            />
                            <FormModal
                                table="message"
                                type="delete"
                                id={item.id}
                            />
                        </>
                    ) : null}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">
                    All Messages
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image
                                src="/filter.png"
                                alt=""
                                width={14}
                                height={14}
                            />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image
                                src="/sort.png"
                                alt=""
                                width={14}
                                height={14}
                            />
                        </button>
                        {role === "admin" || role === "teacher" ? (
                            <FormModal table="message" type="create" />
                        ) : null}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table
                columns={columns}
                renderRow={renderRow}
                data={messagesData}
            />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default MessageListPage;
