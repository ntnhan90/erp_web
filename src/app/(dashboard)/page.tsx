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
            <div className="row">
                <div className="col-sm-6 col-lg-3">
                    <Card bg="primary" text="white" className="mb-4">
                        <CardBody className="pb-0 d-flex justify-content-between align-items-start">
                            <div>
                                <div className="fs-4 fw-semibold">
                                    26Ktest
                                    <span className="fs-6 ms-2 fw-normal">
                                    (-12%
                                    <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                                    )
                                    </span>
                                </div>
                                <div>Users</div>
                            </div>
                            <Dropdown align="end">
                                <DropdownToggle
                                    as="button"
                                    bsPrefix="btn"
                                    className="btn-link rounded-0 text-white shadow-none p-0"
                                    id="dropdown-chart1"
                                >
                                    <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                                </DropdownToggle>

                                <DropdownMenu>
                                    <DropdownItem href="#/action-1">Action</DropdownItem>
                                    <DropdownItem href="#/action-2">Another action</DropdownItem>
                                    <DropdownItem href="#/action-3">Something else</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </CardBody>
                        <div className="mt-3 mx-3" style={{ height: '70px' }}>
                            <UserChart />
                        </div>
                    </Card>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <Card bg="info" text="white" className="mb-4">
                        <CardBody className="pb-0 d-flex justify-content-between align-items-start">
                            <div>
                                <div className="fs-4 fw-semibold">
                                $6.200
                                    <span className="fs-6 ms-2 fw-normal">
                                        (40.9%
                                        <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                                        )
                                    </span>
                                </div>
                                <div>Income</div>
                            </div>
                           
                        </CardBody>  
                        <div className="mt-3 mx-3" style={{ height: '70px' }}>
                        </div>
                    </Card>                               
                </div>

                <div className="col-sm-6 col-lg-3">
                    <Card bg="warning" text="white" className="mb-4">
                        <CardBody className="pb-0 d-flex justify-content-between align-items-start">
                            <div>
                                <div className="fs-4 fw-semibold">
                                2.49%
                                <span className="fs-6 ms-2 fw-normal">
                                    (84.7%
                                    <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                                    )
                                </span>
                                </div>
                                <div>Conversion Rate</div>
                            </div>
                        </CardBody>
                        <div className="mt-3 mx-3" style={{ height: '70px' }}>
                        </div>
                    </Card>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <Card bg="danger" text="white" className="mb-4">
                        <CardBody className="pb-0 d-flex justify-content-between align-items-start">
                            <div>
                                <div className="fs-4 fw-semibold">
                                44K
                                <span className="fs-6 ms-2 fw-normal">
                                    (-23.6%
                                    <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                                    )
                                </span>
                                </div>
                                <div>Sessions</div>
                            </div>
                     
                        </CardBody>
                        <div className="mt-3 mx-3" style={{ height: '70px' }}>
                        </div>
                    </Card>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12">
                    <Card>
                        <CardHeader>
                            Sales
                        </CardHeader>
                        <CardBody>
                            <div className="table-responsive">
                                <table className="table border mb-0">
                                    <thead className="table-light sw-semibold">
                                        <tr className="align-middle">
                                            <th className="text-center" aria-label="icon">
                                                <FontAwesomeIcon icon={faUsers} fixedWidth />
                                            </th>
                                            <th>User</th>
                                            <th>Order</th>
                                            <th className="text-center">Payment Method</th>
                                            <th>Activity</th>
                                            <th aria-label="Action" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="align-middle">
                                            <td className="text-center">
                                                <div className="avatar avatar-md d-inline-flex position-relative">
                                                    <Image
                                                        fill
                                                        sizes="40px"
                                                        className="rounded-circle"
                                                        src="/assets/img/avatars/1.jpg"
                                                        alt="user@email.com"
                                                    />
                                                    <span
                                                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div>Yiorgos Avraamu</div>
                                                <div className="small text-black-50">
                                                <span>New</span>
                                                {' '}
                                                | Registered: Jan 1, 2020
                                                </div>
                                            </td>
                                            <td>
                                                <div className="clearfix">
                                                <div className="float-start">
                                                    <div className="fw-semibold">50%</div>
                                                </div>
                                                <div className="float-end">
                                                    <small className="text-black-50">
                                                    Jun 11, 2020 - Jul 10, 2020
                                                    </small>
                                                </div>
                                                </div>
                                                <ProgressBar className="progress-thin" variant="success" now={50} />
                                            </td>
                                            <td className="text-center" aria-label="icon">
                                                <FontAwesomeIcon icon={faCcAmex} size="lg" fixedWidth />
                                            </td>
                                            <td>
                                                <div className="small text-black-50">Last login</div>
                                                <div className="fw-semibold">10 sec ago</div>
                                            </td>
                                            <td>
                                                <Dropdown align="end">
                                                <DropdownToggle
                                                    as="button"
                                                    bsPrefix="btn"
                                                    className="btn-link rounded-0 text-black-50 shadow-none p-0"
                                                    id="action-user1"
                                                >
                                                    <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                                                </DropdownToggle>

                                                <DropdownMenu>
                                                    <DropdownItem href="#/action-1">Info</DropdownItem>
                                                    <DropdownItem href="#/action-2">Edit</DropdownItem>
                                                    <DropdownItem
                                                    className="text-danger"
                                                    href="#/action-3"
                                                    >
                                                    Delete
                                                    </DropdownItem>
                                                </DropdownMenu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    </tbody>        
                                </table>
                            </div>
                        </CardBody> 
                    </Card>                        
                </div>                            
            </div>                                           

            <div className="row mt-3">
                <div className="col-md-12">
                    <Card>
                        <CardHeader>
                            Sales
                        </CardHeader>
                        <CardBody>
                            <div className="table-responsive">
                                <table className="table border mb-0">
                                    <thead className="table-light sw-semibold">
                                        <tr className="align-middle">
                                            <th className="text-center" aria-label="icon">
                                                <FontAwesomeIcon icon={faUsers} fixedWidth />
                                            </th>
                                            <th>User</th>
                                            <th>Order</th>
                                            <th className="text-center">Payment Method</th>
                                            <th>Activity</th>
                                            <th aria-label="Action" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="align-middle">
                                            <td className="text-center">
                                                <div className="avatar avatar-md d-inline-flex position-relative">
                                                    <Image
                                                        fill
                                                        sizes="40px"
                                                        className="rounded-circle"
                                                        src="/assets/img/avatars/1.jpg"
                                                        alt="user@email.com"
                                                    />
                                                    <span
                                                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div>Yiorgos Avraamu</div>
                                                <div className="small text-black-50">
                                                <span>New</span>
                                                {' '}
                                                | Registered: Jan 1, 2020
                                                </div>
                                            </td>
                                            <td>
                                                <div className="clearfix">
                                                <div className="float-start">
                                                    <div className="fw-semibold">50%</div>
                                                </div>
                                                <div className="float-end">
                                                    <small className="text-black-50">
                                                    Jun 11, 2020 - Jul 10, 2020
                                                    </small>
                                                </div>
                                                </div>
                                                <ProgressBar className="progress-thin" variant="success" now={50} />
                                            </td>
                                            <td className="text-center" aria-label="icon">
                                                <FontAwesomeIcon icon={faCcAmex} size="lg" fixedWidth />
                                            </td>
                                            <td>
                                                <div className="small text-black-50">Last login</div>
                                                <div className="fw-semibold">10 sec ago</div>
                                            </td>
                                            <td>
                                                <Dropdown align="end">
                                                <DropdownToggle
                                                    as="button"
                                                    bsPrefix="btn"
                                                    className="btn-link rounded-0 text-black-50 shadow-none p-0"
                                                    id="action-user1"
                                                >
                                                    <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                                                </DropdownToggle>

                                                <DropdownMenu>
                                                    <DropdownItem href="#/action-1">Info</DropdownItem>
                                                    <DropdownItem href="#/action-2">Edit</DropdownItem>
                                                    <DropdownItem
                                                    className="text-danger"
                                                    href="#/action-3"
                                                    >
                                                    Delete
                                                    </DropdownItem>
                                                </DropdownMenu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    </tbody>        
                                </table>
                            </div>
                        </CardBody> 
                    </Card>                        
                </div>                            
            </div> 
        </>
    )
}