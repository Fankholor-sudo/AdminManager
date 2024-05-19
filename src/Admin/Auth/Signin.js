import React, { useState } from "react";
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "../Styles/profile.css";

export default function Signin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setErrors] = useState({
        email: false,
        password: false,
    });

    const errorMsg = {
        email: "Email is required.",
        password: "Password is required.",
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password)
            setErrors({ ...error, email: !email ? true : false, password: !password ? true : false });
        else {
            console.log("Form submitted with:", { email, password });
            navigate("/admin");
        }
    };
    return (
        <div style={mainStyle}>
            <Form style={formStyle}>
                <Container style={headingContainer}>
                    <div style={headingStyle}>SignIn</div>
                    <div style={describeStyle}>Please enter your details below to signin.</div>
                </Container>
                <Container>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label style={labelStyle}>Email</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            placeholder={"email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={error.email}
                        />
                        <span className={"spanErr"}>{errorMsg.email}</span>
                    </Form.Group>

                    <Form.Group size="lg" controlId="password">
                        <Form.Label style={labelStyle}>Password</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required={error.password}
                        />
                        <span className={"spanErr"}>{errorMsg.password}</span>
                    </Form.Group>

                    <Button
                        style={btnStyle}
                        block="true"
                        size="lg"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        {"Signin"}
                    </Button>
                </Container>
            </Form>
        </div>
    )
}

const mainStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins",
    background: 'linear-gradient(to right, #333, #f8f8f8, #333)',
}

const headingContainer = {
    marginBottom: 50,
}
const headingStyle = {
    fontSize: 50,
    fontWeight: "bolder",
}
const describeStyle = {
    fontSize: 18,
    color: "#333",
}

const formStyle = {
    width: "50%",
    display: "block",
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: "5px",
    fontSize: "16px",
    padding: 50,
};

const labelStyle = {
    margin: "10px 0 0 0",
    fontSize: "17px",
    fontWeight: "500",
    color: "#000",
};

const inputStyle = {
    width: "100%",
    height: 45,
    padding: "0 10px",
    marginBottom: 10,
    borderRadius: "5px",
    fontSize: "15px",
    color: "#000",
    boxSizing: "border-box",
    border: "2px solid rgba(255,67,0, 1)",
    background: "rgb(245, 245, 245)",
};

const btnStyle = {
    width: "50%",
    height: 45,
    fontSize: "16px",
    display: "block",
    marginTop: 20,
    padding: "7px 10px",
    color: "#fff",
    border: "1px solid rgba(255,67,0, 1)",
    borderRadius: "5px",
    background: "rgba(255,67,0, 1)",
}
