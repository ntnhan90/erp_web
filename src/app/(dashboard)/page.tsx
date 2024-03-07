import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faDownload, faEllipsisVertical,
    faMars,
    faSearch,
    faUsers,
    faVenus
} from "@fortawesome/free-solid-svg-icons";
import { 
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    ProgressBar
} from "react-bootstrap";
import {
    faCcAmex,
    faCcApplePay,
    faCcPaypal,
    faCcStripe,
    faCcVisa,
    faFacebookF,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React from "react";
import UserChart  from "@/components/dashboard/UserChart";
import SessionChart from "@/components/dashboard/SessionChart";
import IncomeChart from "@/components/dashboard/IncomChart";
import ConversionChart from "@/components/dashboard/ConversionChart";
import TrafficChart from "@/components/dashboard/TrafficChat";

export default function Page(){
    return(
        <>
            DashBoard
        </>
    )
}