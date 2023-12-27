import Imaga, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

type Props ={
	src: string;
	fallbackSrc: string;
} & ImageProps;

export default function ImageFallback( props:Props){
	const { src , fallbackSrc, ... rest} = props
}