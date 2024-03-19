import { faAddressBook, faBell, faFileLines, faStar } from "@fortawesome/free-solid-svg-icons";
import { faBug, faCalculator, faChartPie, faCode, faDroplet, faGauge,
    faLayerGroup, faLocationArrow, faPencil, faPuzzlePiece, faRightToBracket,faHome, faUsers, 
    faEnvelope , } from "@fortawesome/free-solid-svg-icons";
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
            <SidebarNavItem icon={faCode} href="/pokemons">
                Sample
                <small className="ms-auto"><Badge bg="danger" className="ms-auto">DEMO</Badge></small>
            </SidebarNavItem>

            <SidebarNavTitle>Components</SidebarNavTitle>
            <SidebarNavItem icon={faHome} href="/">
                Dashboard
            </SidebarNavItem>
            
            <SidebarNavGroup toggleIcon={faUsers} toggleText="Customers">
                <SidebarNavItem href="#">Customers</SidebarNavItem>
                <SidebarNavItem href="#">Groups</SidebarNavItem>
            </SidebarNavGroup>
            <SidebarNavGroup toggleIcon={faPuzzlePiece} toggleText="Products">
                <SidebarNavItem href="#">Products</SidebarNavItem>
            </SidebarNavGroup>
            <SidebarNavGroup toggleIcon={faPuzzlePiece} toggleText="Orders">
                <SidebarNavItem href="#">Orders</SidebarNavItem>
                <SidebarNavItem href="#">IncompleteOrders</SidebarNavItem>
                <SidebarNavItem href="#">Invoices</SidebarNavItem>
            </SidebarNavGroup>
            <SidebarNavGroup toggleIcon={faPuzzlePiece} toggleText="Marketplace">
                <SidebarNavItem href="#">Stores</SidebarNavItem>
                <SidebarNavItem href="#">Vendors</SidebarNavItem>
            </SidebarNavGroup>
            <SidebarNavItem icon={ faUsers } href="#">Users</SidebarNavItem>
            <SidebarNavItem icon={ faCalculator } href="#">Statistic</SidebarNavItem>
            <SidebarNavItem icon={ faEnvelope } href="#">Settings</SidebarNavItem>
        </ul>
    )
}