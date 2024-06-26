import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import LoginForm from "./login";
import { getDictionary } from "@/locales/dictionary";

export default async function Page(){
    const dict = await getDictionary();

    return(
        <Row className="justify-content-center align-items-center px-3">
            <Col lg={8}>
                <Row>
                <Col md={7} className="bg-white dark:bg-dark border p-5">
                    <div>
                        <h1>{dict.login.title}</h1>
                        <p className="text-black-50 dark:text-gray-500">Sign In to your account</p>
                        <LoginForm />
                    </div>
                </Col>
                <Col md={5} className="bg-primary text-white d-flex align-items-center justify-content-center p-5">
                    <div className="text-center">
                        <h2> Sign up</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Link className="btn btn-lg btn-outline-light mt-3" href="/register">
                            Register Now!
                        </Link>
                    </div>
                </Col>
                </Row>
            </Col>
        </Row>
    )
}