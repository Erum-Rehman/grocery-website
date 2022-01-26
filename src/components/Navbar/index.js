import PageNavbar from "./PageNavbar";
import HomeNavbar from "./HomeNavbar";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <>
        {location.pathname === "/" ? <HomeNavbar /> : <PageNavbar />}
        </>
    )
}
export default Navbar;

