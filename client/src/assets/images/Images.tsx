import React from "react";
import logoImg from "./logo.png";
import logoImgNoBg from "./logo-no-bg.png";
import headerImg from "./header-bg.jpg"
import manBg from "./man-bg.jpg"
import womanBg from "./woman-bg.jpg"
import {Image} from "react-bootstrap";

export const LogoImg = ({className}: { className: string }): JSX.Element => <Image src={logoImg}
                                                                                   className={className}/>
export const LogoImgNoBg = ({className}: { className: string }): JSX.Element => <Image src={logoImgNoBg}
                                                                                       className={className} fluid/>

export const HeaderBg = ({className}: { className: string }): JSX.Element => <Image src={headerImg}
                                                                                    className={className} fluid/>
export const ManBg = ({className}: { className: string }): JSX.Element => (
    <img src={manBg} alt={"not-found"} className={className}/>
)

export const WomanBg = ({className}: { className: string }): JSX.Element => (
    <img src={womanBg} alt={"not-found"} className={className}/>
)