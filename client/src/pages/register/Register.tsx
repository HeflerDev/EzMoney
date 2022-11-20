// @ts-ignore
import React from "react";
import {Form} from "./components"
// @ts-ignore
import {WomanBg} from "@/src/assets/images/Images";
import "@/src/assets/styles/pages/Register.scss";

const Register = () => {
    return (
        <Stack>
            <div className="img-container">
                <WomanBg className={"img"}/>
            </div>
            <Stack className="form-container">
                <Form/>
            </Stack>
        </Stack>
    )
}
export default Register;