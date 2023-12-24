import React, {PropsWithChildren, useContext, useEffect, useState,} from 'react'
import classNames from "classnames";
import Link from "next/link";
import {IconDefinition,} from '@fortawesome/free-regular-svg-icons'

type SidebarNavItemProps = {
	href: string;
	icon?: IconDefinition;
} & PropsWithChildren

const SidebarNavItem = (props:SidebarNavItemProps) =>{
	const { icon, children, href } = props;
}