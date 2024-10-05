'use client'

import useFormularioUsuario from "@/app/hooks/useFormularioUsuario";
import { useState } from "react";

export default function Formulario() {
    const {nome, AlterarNome, email, AlterarEmail, senha, AlterarSenha, salvar} = useFormularioUsuario();
        

  return (
    <div className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Informe o Nome"
        size={80}
        value={nome}
        onChange={(e) => AlterarNome(e.target.value)}
        className="bg-zinc-800 p-2 rounded-md outline-none"
      />
      <input
        type="email"
        placeholder="Informe o E-mail"
        size={80}
        value={email}
        onChange={(e) => AlterarEmail(e.target.value)}
        className="bg-zinc-800 p-2 rounded-md outline-none"
      />
      <input
        type="password"
        placeholder="Informe a Senha"
        size={80}
        value={senha}
        onChange={(e) => AlterarSenha(e.target.value)}
        className="bg-zinc-800 p-2 rounded-md outline-none"
      />
      <button onClick={salvar} className="bg-green-500 p-2 rounded-md">Salvar</button>
      
      <div className="flex flex-col gap-4">
        <span>Nome: {nome}</span>
        <span>E-mail: {email}</span>
        <span>Senha: {senha}</span>
      </div>
    </div>
  );
}
