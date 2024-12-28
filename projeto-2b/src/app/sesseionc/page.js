'use client';
import { useSession } from "next-auth/react";

export default function SessionCheck() {
  const { data: session, status } = useSession();

  // Verificando o status da sessão
  if (status === "loading") {
    return <p>Carregando...</p>; // Exibindo uma mensagem enquanto a sessão está sendo carregada
  }

  if (status === "unauthenticated") {
    return <p>Você não está autenticado.</p>; // Caso o usuário não esteja autenticado
  }

  if (status === "authenticated") {
    return (
        
      <div>
        <p>Bem-vindo, {session.user.id}!</p> {/* Nome do usuário */}
        <p>O e-mail do usuário é: {session.user.email}</p> {/* Exemplo de acesso ao e-mail */}
      </div>
    );
  }

  return null;
}
