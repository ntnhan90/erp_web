import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Header(){
    return(
        <header className="header sticky-top mb-4 py-2 px-sm-2 border-bottom">
            <Container fluid className="header-navbar d-flex align-items-center">
                <Link href="/" className="header-brand d-md-none">
                <svg width="80" height="46">
                    <title>CoreUI Logo</title>
                    <use xlinkHref="/assets/brand/coreui.svg#full" />
                </svg>
                </Link>
            </Container>
        </header>
    )
}