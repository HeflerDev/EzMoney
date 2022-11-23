import * as React from "react";
import {Col, Container, Row, Stack} from "react-bootstrap";
import AuthService from "@/src/services/AuthService/AuthService";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

interface UserData {
    name: string
    password: string
    confPassword: string
}

export const Form = (): JSX.Element => {
    const navigate = useNavigate()
    const [data, setData] = useState<UserData>({
        name: "",
        password: "",
        confPassword: ""
    })
    const [error, setError] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const auth = new AuthService()
        if (data.password !== data.confPassword) return setError("Password mismatch")
        await auth.Register(data)
        if (auth.success) {
            navigate("/")
        } else {
            setError(auth.error)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setData({...data, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} className={"form-block"}>
                <Row>
                    <Col xs={12} className="field-block">
                        <Stack className="field">
                            <label htmlFor="username" className="label">
                                User Name
                            </label>
                            <input type="text" name={"name"} className="input__secondary" onChange={handleChange}/>
                        </Stack>
                    </Col>
                    <Col xs={12} className="field-block">
                        <Stack className="field">
                            <label htmlFor="" className="label">
                                Password
                            </label>
                            <input type="password" value={data.password} name={"password"} onChange={handleChange}
                                   className="input__secondary"/>
                        </Stack>
                    </Col>
                    <Col xs={12} className="field-block">
                        <Stack className="field">
                            <label htmlFor="" className="label">
                                Password Confirmation
                            </label>
                            <input
                                type="password"
                                onChange={handleChange}
                                name={"confPassword"}
                                className="input__secondary"
                                value={data.confPassword}
                            />
                        </Stack>
                    </Col>
                    <Col className="field-block"><Stack className="field"><label htmlFor="" className="label"></label>
                        <button className="submit button__complementary" type={"submit"}>Submit</button>
                    </Stack></Col>
                </Row>
            </form>
        </Container>
    )
}