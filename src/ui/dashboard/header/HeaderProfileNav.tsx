import {
    Badge,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
} from 'react-bootstrap'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBell,
    faCreditCard,
    faEnvelopeOpen,
    faFile,
    faMessage,
    faUser 
} from '@fortawesome/free-solid-svg-icons';
import { PropsWithChildren } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faGear, faListCheck, faLock, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import HeaderLogout from './HeaderLogout';
import { AuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import { getDictionary } from '@/locales/dictionary'

type ItemWithIconProps ={
    icon: IconDefinition;
} & PropsWithChildren

const ItemWithIcon =(props: ItemWithIconProps) => {
    const { icon, children } = props;
    return(
        <>
            <FontAwesomeIcon className='me-2' icon={icon} fixedWidth />
            {children}
        </>
    )
}

export default async function HeaderProfileNav(){
    //const session = await getServerSession(authOptions)
    const dict = await getDictionary();

    return(
        <Nav>
            <Dropdown as={NavItem}>
                <DropdownToggle variant="link" bsPrefix="hide-caret" className="py-0 px-2 rounded-0" id="dropdown-profile">
                    <div className="avatar position-relative">
                        Profile
                    </div>
                </DropdownToggle>
                <DropdownMenu className="pt-0">
                    <DropdownHeader className="fw-bold rounded-top">{dict.profile.account.title}</DropdownHeader>
                    <Link href="#" passHref legacyBehavior>
                        <DropdownItem>
                        <ItemWithIcon icon={faBell}>
                            {dict.profile.account.items.updates}
                            <Badge bg="info" className="ms-2">42</Badge>
                        </ItemWithIcon>
                        </DropdownItem>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                        <DropdownItem>
                        <ItemWithIcon icon={faEnvelopeOpen}>
                            {dict.profile.account.items.messages}
                            <Badge bg="success" className="ms-2">42</Badge>
                        </ItemWithIcon>
                        </DropdownItem>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                        <DropdownItem>
                        <ItemWithIcon icon={faListCheck}>
                            {dict.profile.account.items.tasks}
                            <Badge bg="danger" className="ms-2">42</Badge>
                        </ItemWithIcon>
                        </DropdownItem>
                    </Link>
                    <Link href="#" passHref legacyBehavior>
                        <DropdownItem>
                        <ItemWithIcon icon={faMessage}>
                            {dict.profile.account.items.comments}
                            <Badge bg="warning" className="ms-2">42</Badge>
                        </ItemWithIcon>
                        </DropdownItem>
                    </Link>

                    <DropdownDivider />

                    <Link href="#" passHref legacyBehavior>
                        <DropdownItem>
                        <ItemWithIcon icon={faLock}>{dict.profile.lock_account}</ItemWithIcon>
                        </DropdownItem>
                    </Link>
                    <HeaderLogout>
                        <DropdownItem>
                        <ItemWithIcon icon={faPowerOff}>{dict.profile.logout}</ItemWithIcon>
                        </DropdownItem>
                    </HeaderLogout>
                </DropdownMenu>
            </Dropdown>
        </Nav>
    )
}