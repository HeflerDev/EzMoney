import React from "react";
import {ContentPayload} from "src/lib/Home";
import {Col, Container, Row, Stack} from "react-bootstrap";
import {LogoImgNoBg, HeaderBg} from "@/src/assets/images/Images";
import {NavigateFunction, useNavigate} from "react-router-dom";

export const Header = ({payload}: { payload: ContentPayload }): JSX.Element => {
    const navigate = useNavigate();

    return (
        <section className="header-section">
            <HeaderBg className={"bg"}/>
            <Container>
                <Row className={"h-100"}>
                    <Col xs={12} md={5} className={"header-content"}>
                        <Stack className={"content"}>
                            <h3 className="title">
                                {payload.title}
                            </h3>
                            <p className="body">
                                {payload.body}
                            </p>
                            <button className="button__primary" onClick={(): void => navigate("/signup")}>
                                {payload.btnLabel}
                            </button>
                            <p className={"question"}>Already have an account ?</p>
                            <button className="button__secondary" onClick={(): void => navigate("/login")}>
                                Login
                            </button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
