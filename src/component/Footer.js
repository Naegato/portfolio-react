import img from "../img/first-section.png";
import imgMail from "../img/envelope-fill.svg";
import imgTel from "../img/telephone-fill.svg";
import imgGithub from "../img/github.svg";
import imgLink from "../img/linkedin.svg";
import {useResize} from "../hook/useResize";

export const Footer = () => {
    const size = useResize();

    return (
        <footer>
            <div>
                <h2>MAXIME WIATR</h2>
                <h2>PORTFOLIO</h2>
            </div>
            { size.width > 600 ?
                <div>
                    <h2>60550, Verneuil-En-Halatte,</h2>
                    <h2>21 rue henry le chatelier</h2>
                </div> : null
            }
            { size.width > 1200 ?
                <div>
                    <h2><a href="mailto:maxime.wiatr@gmail.com">maxime.wiatr@gmail.com</a></h2>
                    <h2><a href="tel:+33 6 17 52 50 75">+33 6 17 52 50 75</a></h2>
                </div> : null
            }

            <ul>
                <li>
                    <a href="mailto:maxime.wiatr@gmail.com"><img src={imgMail} alt='image'/></a>
                </li>
                <li>
                    <a href="tel:+33 6 17 52 50 75"><img src={imgTel} alt='image'/></a>
                </li>
                <li>
                    <a href="https://github.com/Naegato/"><img src={imgGithub} alt='image'/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/maxime-wiatr-0273641a3/"><img src={imgLink} alt='image'/></a>
                </li>
            </ul>
        </footer>
    )
}