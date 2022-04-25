import * as lib from './componentLib';
import {useEffect, useState} from "react";
import {Component} from "./Component";

import json from "./json/data.json";
import {useDispatch, useSelector} from "react-redux";
import {fetchData, getData} from "./redux/slice";

export const Portfolio = () => {
    const Navbar = lib['Navbar'];
    const Footer = lib['Footer'];

    const [page,setPage] = useState({
        page: 'Home',
        project: null,
    });

    const setNav = (str, project = null) => {
        console.log('nav');
        window.scrollTo(0, 0)
        setPage({
            page: str,
            project: project,
        })
    }

    const data = json["portfolio-react"];
    //
    // const dispatch = useDispatch();
    // const dataViewer = useSelector(getData);
    //
    // useEffect(() => {
    //     dispatch(fetchData());
    // },[]);
    //
    // const {data} = dataViewer;

    if (data.projects) {
        return (
            <>
                <Navbar onButtonNav={(str) => setNav(str)} />
                    <Component page={page.page} navigation={(str, proj = null) => setNav(str, proj)} projects={page.project ? page.project : data.projects} />
                <Footer />
            </>
        )
    }

    return <div>fallback</div>
}