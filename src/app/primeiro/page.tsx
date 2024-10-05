import Image from "next/image";
import Botao from '@/components/Botao'
import Pagina from "@/components/templates/pagina";

export default function Home() {
    return (
      <Pagina>
          <div className="flex gap-2">
            <Botao label = "Salvar"/>
            <Botao label = "Cancelar"/>
          </div>
      </Pagina>
    
    )
}