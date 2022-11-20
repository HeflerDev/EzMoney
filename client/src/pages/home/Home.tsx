// @ts-ignore
import React from "react";
// @ts-ignore
import {ContentPayload} from "@/src/lib/Home";
import {Stack} from "react-bootstrap";
import {Header} from "./components";
import "@/src/assets/styles/pages/Home.scss"

const Home = (): JSX.Element => {
    const headerContent: ContentPayload = {
        title: "Do more with EzMoney",
        body: "Here on EzMoney, revenue can be generated with just few clicks away.",
        btnLabel: "Sign Up",
        asset: "Image"
    }
    return (
        <Stack className={"home-container"}>
            <Header payload={headerContent}/>
        </Stack>
    )
}

export default Home;