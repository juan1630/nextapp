import { Activatelink } from "./Activatelink";

export const Navbar = () => {
    return(<nav>
        <Activatelink  text='Home' href="/" /> 
        <Activatelink  text='About' href="/about" />  
        <Activatelink  text='Contact' href="/contact" />
    </nav>);
}   