import { FC, CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    text: string;
    href: string;
}

const style: CSSProperties = {
    textDecoration: 'underline',
    color:'#0070f3',
    fontWeight: 800
}

export const Activatelink: FC<Props> = ({ text, href })  => {

    const { asPath } = useRouter();

    return(
        <Link   href={ href } style={ asPath === href  ? style : undefined } > 
                { text }
        </Link>
    );
}