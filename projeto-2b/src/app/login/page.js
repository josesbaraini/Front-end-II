"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";


export default function SignIn() {
  const [nome, setnome] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      nome,
      password,
      redirect: false,
    });

    if (result?.error) {
      alert("Ta errado Paizão");
    } else {
      alert("Ta certo Paizão agr c ta verificado");
      router.push("/fichas")
  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="nome"
        id="nome"
        name="nome"
        value={nome}
        onChange={(e) => setnome(e.target.value)}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
