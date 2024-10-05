import Contador from "@/components/Contador";
import Pagina from "@/components/templates/pagina";

export default function PaginaContador() {
  return (
    <Pagina>
        <div>
            <Contador valorInicial={100} />
            <Contador valorInicial={-25} />
            <Contador valorInicial={0} />
        </div>
    </Pagina>
  );
}
