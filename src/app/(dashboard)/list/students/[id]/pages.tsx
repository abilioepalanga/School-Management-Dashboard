import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Student = {
    id: number;
    studentId: string;
    name: string;
    email?: string;
    photo: string;
    phone?: string;
    grade: number;
    class: string;
    address: string;
};
