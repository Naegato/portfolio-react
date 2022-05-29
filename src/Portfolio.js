import * as lib from './componentLib';
import {useState} from "react";
import {Component} from "./Component";

export const Portfolio = () => {
    const Navbar = lib['Navbar'];
    const Footer = lib['Footer'];

    const [page,setPage] = useState({
        page: 'Home',
        project: null,
    });

    const setNav = (str, id = null) => {
        window.scrollTo(0, 0)
        setPage({
            page: str,
            project: id,
        })
    }

    return (
        <>
            <Navbar onButtonNav={(str) => setNav(str)} />
                <Component page={page.page} navigation={(str, id = null) => setNav(str, id)} projectId={page.project} />
            <Footer />
        </>
    )
}