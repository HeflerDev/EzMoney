import React, {useState} from "react";
import {Col, Container, Row, Stack} from "react-bootstrap";
import AuthService from "@/src/services/AuthService/AuthService";
import {useNavigate} from "react-router-dom";

export const Form = (): JSX.Element => {
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    const [error, setError] = useState<string>("")

    async function handleSubmit(e: React.SyntheticEvent): Promise<any> {
        e.preventDefault();
        const auth = new AuthService()
        await auth.Login({name, password})
        if (auth.success) {
            navigate("/dashboard")
        } else {
            setError(auth.error)
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} className={"login-form"}>
                {
                    error && (
                        <>
                            {error}
                        </>
                    )
                }
                <Row>
                    <Col xs={12} className={"field"}>
                        <Stack>
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                value={name}
                                className={"input__accent"}
                            />
                        </Stack>
                    </Col>
                    <Col xs={12} className={"field"}>
                        <Stack>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                value={password}
                                className={"input__accent"}
                            />
                        </Stack>
                    </Col>
                    <Col xs={12} className={"field"}>
                        <Stack>
                            <button type="submit" className="button__complementary">Submit</button>
                        </Stack>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}