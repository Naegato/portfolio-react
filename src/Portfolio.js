import * as lib from './componentLib';
import {useState} from "react";
import {Component} from "./Component";

import data from "./json/data.json";

export const Portfolio = () => {
    const Navbar = lib['Navbar'];
    const Footer = lib['Footer'];

    const [page,setPage] = useState({
        page: 'Home',
        project: null,
    });

    const setNav = (str, project = null) => {
        setPage({
            page: str,
            project: project,
        })
    }

    return (
        <>
            <Navbar onButtonNav={(str) => setNav(str)} />
            <Component page={page.page} navigation={(str, proj = null) => setNav(str, proj)} projects={page.project ? page.project : data} />
            <Footer />
        </>
    )
}