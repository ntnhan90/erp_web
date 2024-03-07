import { faAddressBook, faBell, faFileLines, faStar } from "@fortawesome/free-solid-svg-icons";
import { faBug, faCalculator, faChartPie, faCode, faDroplet, faGauge,
    faLayerGroup, faLocationArrow, faPencil, faPuzzlePiece, faRightToBracket  } from "@fortawesome/free-solid-svg-icons";
import React, {PropsWithChildren} from "react";   
import { Badge } from "react-bootstrap";
import SidebarNavGroup from "./SidebarNavGroup";
import SidebarNavItem from "./SidebarNavItem";

const SidebarNavTitle = (props: PropsWithChildren) =>{
    const {children } = props;
    return(
        <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
    )
}

export default function SidebarNav(){
    return (
        <ul className="list-unstyled">
            <SidebarNavItem icon={faGauge} href="/">
                Dashboard
                <small className="ms-auto"><Badge bg="info" className="ms-auto">NEW</Badge></small>
            </SidebarNavItem>
            <SidebarNavItem icon={faCode} href="/pokemons">
                Sample
                <small className="ms-auto"><Badge bg="danger" className="ms-auto">DEMO</Badge></small>
            </SidebarNavItem>
            <SidebarNavTitle>Theme</SidebarNavTitle>
            <SidebarNavItem icon={faDroplet} href="#">Colors</SidebarNavItem>
            <SidebarNavItem icon={faPencil} href="#">Typography</SidebarNavItem>
            <SidebarNavTitle>Components</SidebarNavTitle>

            <SidebarNavGroup toggleIcon={faPuzzlePiece} toggleText="Base">
                <SidebarNavItem href="#">Accordion</SidebarNavItem>
                <SidebarNavItem href="#">Breadcrumb</SidebarNavItem>
                <SidebarNavItem href="#">Cards</SidebarNavItem>
                <SidebarNavItem href="#">Carousel</SidebarNavItem>
                <SidebarNavItem href="#">Collapse</SidebarNavItem>
                <SidebarNavItem href="#">List group</SidebarNavItem>
                <SidebarNavItem href="#">Navs</SidebarNavItem>
                <SidebarNavItem href="#">Pagination</SidebarNavItem>
                <SidebarNavItem href="#">Popovers</SidebarNavItem>
                <SidebarNavItem href="#">Progress</SidebarNavItem>
                <SidebarNavItem href="#">Scrollspy</SidebarNavItem>
                <SidebarNavItem href="#">Spinners</SidebarNavItem>
                <SidebarNavItem href="#">Tables</SidebarNavItem>
                <SidebarNavItem href="#">Tabs</SidebarNavItem>
                <SidebarNavItem href="#">Tooltips</SidebarNavItem>
            </SidebarNavGroup>
        </ul>
    )
}