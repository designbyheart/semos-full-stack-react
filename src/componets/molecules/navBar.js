import React  from "react";
import NavButton from "../atoms/NavButton";
import { defaultLinks } from "../../utylities/navigationData";

const NavBar = ({ user = null, links = defaultLinks }) => {
    return (<nav className="navbar">
        {links.map(({ title, link }) => <NavButton key={title+link} text={title} link={link}/>)}
    </nav>)
}

export default NavBar;