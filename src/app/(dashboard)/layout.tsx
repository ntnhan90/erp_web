import { Container } from "react-bootstrap";
import React from "react";
import SidebarProvider from "@/ui/dashboard/SidebarProvider";
import SidebarOverlay from "@/ui/dashboard/sidebar/SidebarOverlay";
import Sidebar from "@/ui/dashboard/sidebar/Sidebar";
import SidebarNav from "@/ui/dashboard/sidebar/SidebarNav";
import Header from "@/ui/dashboard/header/Header";
import Footer from "@/ui/dashboard/footer/Footer";

export default function Layout({
    children,
}:{
    children:React.ReactNode
}) {
    return(
        <SidebarProvider>
            <SidebarOverlay />
            <Sidebar>
                <SidebarNav />
            </Sidebar>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <Header /> 
                <div className="body flex-grow-1 px-sm-2 mb-4">
                    <Container fluid="lg">
                        {children}
                    </Container>
                </div>
                <Footer />
            </div>
        </SidebarProvider>
    )
}