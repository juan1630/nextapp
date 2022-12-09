import Link from "next/link";
import { useRouter } from "next/router";


const style = {
    textDecoration: 'underline'
}

export const Activatelink = ({ text, href }) => {

    console.log( text, href )
    const { asPath } = useRouter();

    return(
        <Link   href={ href } style={ asPath === href  ? style : null } > 
                { text }
        </Link>
    );
}