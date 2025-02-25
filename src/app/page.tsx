"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Corrigido para 'next/navigation'

const Homepage = () => {
    const router = useRouter();

    useEffect(() => {
        // Redireciona para a página de login assim que a homepage for carregada
        router.push("/sign-in");
    }, [router]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800">
                Redirecting to Login...
            </h1>
        </div>
    );
};

export default Homepage;
