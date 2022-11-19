// @ts-ignore
import React from "react";
import {Form} from "./components";
import {Stack} from "react-bootstrap";
import "./Login.scss"
import {ManBg} from "@/src/assets/images/Images";

const Login = (): JSX.Element => {
    return (
        <Stack className={"login-section"}>
            <div className="img-container">
                <ManBg className={"img"}/>
            </div>
            <div className="form">
                <Form/>
            </div>
        </Stack>
    )
}

export default Login;