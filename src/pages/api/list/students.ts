import { NextApiRequest, NextApiResponse } from "next";

const students = [
    { id: 1, name: "John Prizley" },
    { id: 2, name: "Jane Doe" },
    // Add more students as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        res.status(200).json(students);
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
