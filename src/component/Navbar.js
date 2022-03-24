import img1 from '../img/logo-lg.svg'
import img2 from '../img/logo-md.svg'
import img3 from '../img/logo-sm.svg'

import {useResize} from "../hook/useResize";

export const Navbar = () => {

    const size = useResize();

    return (
        <nav>
            <div className="logo">
                <img src={size.width < 1200 ? size.width < 600 ? img3 : img2 : img1}/>
            </div>
            <ul>
                <li>
                    <button>Home {size.width}</button>
                    {/* page tease*/}
                </li>
                <li>
                    <button>About</button>
                    {/* page avec une photo de moi, mes skills, une timeline, mon cv et une description*/}
                </li>
                <li>
                    <button>Project</button>
                {/*  page avec mes projets  */}
                </li>
                <li>
                    <button>Contact</button>
                </li>
            </ul>
        </nav>
    )
}