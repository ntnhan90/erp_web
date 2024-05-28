

import Link from "next/link";
import { Nav } from "react-bootstrap";
import { getDictionary } from '@/locales/dictionary'

export default async function HeaderProfileNav(){
    const dict = await getDictionary();

    return(
        <Nav>
            Profile
        </Nav>
    )
}