'use client'

import Cookies from "js-cookie";
import React, { useState} from "react";
import { useRouter } from "next/router";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function HeaderLocale({ currentLocale} : {currentLocale:string}){

    return(
        <Dropdown>
            Locale
        </Dropdown>
    )
}