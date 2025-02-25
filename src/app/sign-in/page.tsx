"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importação correta de next/navigation

const LoginPage = () => {
    const router = useRouter(); // Usando a navegação correta do next/navigation
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        // Sua lógica de login aqui
        if (email && password) {
            // Simulação de login bem-sucedido
            router.push("/admin"); // Redireciona para a página de admin após login
        } else {
            setError("Por favor, preencha todos os campos!");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Digite seu email"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Digite sua senha"
                    />
                </div>

                <button
                    onClick={handleLogin}
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
                >
                    Entrar
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
