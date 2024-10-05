import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface MenuItemprops {
    icone?: any
    texto: String;
    href: Url;
}

export default function MenuItem(props: MenuItemprops) {
    return(
        <div className="flex items-center gap-2 p-2 hover:bg-black/20">
            {props.icone}
            <Link href={props.href}>{props.texto}</Link>
        </div>
    )
}
