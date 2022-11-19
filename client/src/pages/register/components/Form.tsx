import * as React from "react";
import {Col, Container, Row, Stack} from "react-bootstrap";
import AuthService from "@/src/services/AuthService/AuthService";
import {useState} from "react";
import User from "@/src/lib/User";
import {useNavigate} from "react-router-dom";

export const Form = (): JSX.Element => {
    const [data, setData] = useState<User>({
        username: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const auth = new AuthService()
        await auth.Register(data)
        if (auth.success) {
            navigate("/")
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Row className={"form-row"}>
                    <Col className="field-block">
                        <Stack className="field">
                            <label htmlFor="username" className="label">
                                User Name
                            </label>
                            <input type="text" className="input"/>
                        </Stack>
                    </Col>
                    <Col className="field-block">
                        <Stack className="field">
                            <label htmlFor="" className="label">
                                Email
                            </label>
                            <input type="text" className="input"/>
                        </Stack>
                    </Col>
                    <Col className="field-block">
                        <Stack className="field">
                            <label htmlFor="" className="label">
                                Password
                            </label>
                            <input type="text" className="input"/>
                        </Stack>
                    </Col>
                    <Col className="field-block">
                        <Stack className="field">
                            <label htmlFor="" className="label">
                                Password Confirmation
                            </label>
                            <input type="text" className="input"/>
                        </Stack>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}