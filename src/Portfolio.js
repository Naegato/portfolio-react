import * as lib from './componentLib';
import {useEffect, useState} from "react";
import {Component} from "./Component";

import json from "./json/data.json";
import {useDispatch, useSelector} from "react-redux";
import {fetchData, getData} from "./redux/slice";
// import {Authentificate} from "./axios/Authentificate";

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

    // const t = new Authentificate("http://localhost:3001/portfolio-react");
    // console.log(t);
    // t.data.then((r) => {
    //     console.log(r)
    // });

    const data = json["portfolio-react"].projects;

    // const dispatch = useDispatch();
    // const dataViewer = useSelector(getData);
    //
    // useEffect(() => {
    //     dispatch(fetchData());
    // }, []);
    //
    // const data = dataViewer.projects;
    //
    // console.log(data);

    return (
        <>
            <Navbar onButtonNav={(str) => setNav(str)} />
                <Component page={page.page} navigation={(str, proj = null) => setNav(str, proj)} projects={page.project ? page.project : data} />
            <Footer />
        </>
    )
}