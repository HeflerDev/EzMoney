import * as React from "react";
import {Col, Container, Row, Stack} from "react-bootstrap";
import AuthService from "@/src/services/AuthService/AuthService";
import {useState} from "react";
import User from "@/../../../../../lib/User";
import {useNavigate} from "react-router-dom";

export const Form = (): JSX.Element => {
    const navigate = useNavigate()
    const [data, setData] = useState<User>({
        username: "",
        email: "",
        password: ""
    })
    const [passwordConf, setPasswordConf] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const auth = new AuthService()
        await auth.Register(data)
        if (auth.success) {
            navigate("/")
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
                            <input type="text" name={"username"} className="input__secondary" onChange={handleChange}/>
                        </Stack>
                    </Col>
                    <Col xs={12} className="field-block">
                        <Stack className="field">
                            <label htmlFor="" className="label">
                                Email
                            </label>
                            <input type="text" className="input__secondary" name={"email"} onChange={handleChange}/>
                        </Stack>
                    </Col>
                    <Col xs={12} className="field-block">
                        <Stack className="field">
                            <label htmlFor="" className="label">
                                Password
                            </label>
                            <input type="text" name={"password"} onChange={handleChange} className="input__secondary"/>
                        </Stack>
                    </Col>
                    <Col xs={12} className="field-block">
                        <Stack className="field">
                            <label htmlFor="" className="label">
                                Password Confirmation
                            </label>
                            <input
                                type="text"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConf(e.target.value)}
                                className="input__secondary"
                                value={passwordConf}
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