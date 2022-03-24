import * as lib from './componentLib';

export const Portfolio = () => {
    const Navbar = lib['Navbar'];
    const Home = lib['Home'];
    return (
        <>
            <Navbar />
            <Home />
        </>
    )
}