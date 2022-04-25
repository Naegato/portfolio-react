import img1 from '../img/logo-lg.svg'
import img2 from '../img/logo-md.svg'
import img3 from '../img/logo-sm.svg'

import {useResize} from "../hook/useResize";
import {useState} from "react";

export const Navbar = ({onButtonNav}) => {

    const size = useResize();

    const [toggleNavbar, setToggleNavbar] = useState(false);

    const toggleNav = () => {
        setToggleNavbar(!toggleNavbar);
    }

    return (
        <nav>
            <div className="logo">
                <img src={size.width < 1200 ? size.width < 600 ? img3 : img2 : img1} alt="image"/>
            </div>
            {
                size.width > 1200 || toggleNavbar ?
                    <ul>
                        <li>
                            <button onClick={() => {onButtonNav('Home'); if (size.width < 1200) {toggleNav()}}}>Accueil</button>
                            {/* page tease*/}
                        </li>
                        <li>
                            <button onClick={() => { onButtonNav('AboutPage'); if (size.width < 1200) {toggleNav()}}}>A propos</button>
                            {/* page avec une photo de moi, mes skills, une timeline, mon cv et une description*/}
                        </li>
                        <li>
                            <button onClick={() => {onButtonNav('ProjectsPage'); if (size.width < 1200) {toggleNav()}}}>Projets</button>
                            {/*  page avec mes projets  */}
                        </li>
                        <li>
                            <button onClick={() => {onButtonNav('ContactPage'); if (size.width < 1200) {toggleNav()}}}>Contact</button>
                        </li>
                    </ul> : null
            }
            {
                size.width < 1200 ?
                    <button onClick={toggleNav} className={`navbar-button ${toggleNavbar ? 'active' : null }`}> </button> : null
            }



        </nav>
    )
}