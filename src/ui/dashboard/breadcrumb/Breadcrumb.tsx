import { Breadcrumb as BSBreadcrumb, BreadcrumbItem } from "react-bootstrap";
import { getDictionary } from "@/locales/dictionary";
import classNames from "classnames";

export default async function  Breadcrumb() {
    const dict = await getDictionary();

    return(
        <BSBreadcrumb listProps={{ className:'mb-0 align-items-center'}}>
            <BreadcrumbItem
                linkProps={{ classNames: 'text-decoration-none' }}
                href="/"
            >
                {dict.breadcrumb.home}
            </BreadcrumbItem>
            <BreadcrumbItem
                linkProps={{ classNames: 'text-decoration-none' }}
                href="/"
            >
                {dict.breadcrumb.library}
            </BreadcrumbItem>
            <BreadcrumbItem active> {dict.breadcrumb.data}</BreadcrumbItem>
        </BSBreadcrumb>
    )
}