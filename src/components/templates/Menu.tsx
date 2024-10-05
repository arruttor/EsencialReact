import Link from "next/link";
import MenuItem from "./MenuItem";
import { IconForms, IconHome2, IconNumber1, IconNumbers } from "@tabler/icons-react";

export default function Menu() {
    return (
        <aside className="w-80 bg-zinc-800 p-6">
            <nav className="flex flex-col gap-2">
                <MenuItem href={'/'} texto={'Inicio'} icone={<IconHome2/>}></MenuItem>                
                <MenuItem href={'/primeiro'} texto={'Primeiro Componente'} icone={<IconNumber1/>}></MenuItem>                
                <MenuItem href={'/contador'} texto={'Contador'} icone={<IconNumbers/>}></MenuItem>                
                <MenuItem href={'/Formulario'} texto={'Exemplo Formulario'} icone={<IconForms/>}></MenuItem>                
            </nav>
        </aside>
    )

}