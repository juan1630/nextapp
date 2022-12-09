import { Activatelink } from "./Activatelink";

// import { menuItems } from '../db/nav'

 const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {

    console.log( menuItems, 'arr' );
    return(<nav>

        {
            menuItems.map( ({text, href}) => {
               return  <Activatelink  key={ href }  text={ text }  href={href }  /> 
            })
        }
    </nav>);
}   