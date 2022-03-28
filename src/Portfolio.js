import * as lib from './componentLib';
import {useState} from "react";
import {Component} from "./Component";

export const Portfolio = () => {
    const Navbar = lib['Navbar'];
    const Footer = lib['Footer']

    const [page,setPage] = useState('Home');

    return (
        <>
            <Navbar onButtonNav={(str) => setPage(str)} />
            <Component page={page} navigation={(str) => setPage(str)}/>
            <Footer />
        </>
    )
}