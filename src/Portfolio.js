import * as lib from './componentLib';
import axios from 'axios';
import {useEffect, useState} from "react";
import {Component} from "./Component";
import usePromise from "react-promise";

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