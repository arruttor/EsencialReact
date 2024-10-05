import { useState } from "react";

export default function useFormularioUsuario(){
    const [nome,AlterarNome] = useState('');
    const [email,AlterarEmail] = useState('');
    const [senha,AlterarSenha] = useState('');
    
    function salvar(){
        console.log('Nome', nome);
        console.log('E-mail', email);
        console.log('Senha', senha);
    }

    return {
        nome,
        AlterarNome,
        email,
        AlterarEmail,
        senha,
        AlterarSenha,
        salvar
    }
}