import React, { useState, useCallback } from "react";
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import userImg from '../../Images/user.png';
import "../Styles/profile.css";

export default function MyProfile({setNewView}) {
    const [email, setEmail] = useState("");
    const [companyName, setcompanyName] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [setProvince] = useState("");
    const [CIPC, setCIPC] = useState("");
    const [formError] = useState("");
    
    const [error] = useState({
        email: false,
        password: false,
        name: false,
        CIPC: false,
        address: false,
        province: false,
        photo: false,
    });

    const changeView = useCallback(value => {
        setNewView(value)
    },[setNewView])
 
    return (
        <div>        
            <div>
                <Button 
                    onClick={()=>changeView(false)}
                    style={bStyle}> {'< Back'}
                </Button>
                <div style={wrapStyle}>
                    <Container>
                        <Row style={{marginLeft: 20}}>
                            <Col style={{marginRight: 50}}>
                                <img style={imgStyle} src={userImg} alt="" />
                            </Col>

                            <Col style={{marginTop: 10}}>
                                <Form style={formStyle}>
                                    <div>
                                        <Row>
                                            <Col style={{marginRight: 20}}>
                                                <Form.Group size="lg" controlId="email">
                                                <Form.Label style={labelStyle}>Email:</Form.Label>
                                                <Form.Control
                                                    style={inputStyle}
                                                    placeholder={"email"}
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
                                                    required={error.email}
                                                    />
                                                    <span className={"spanErr"}>{errorMsg.email}</span>
                                                </Form.Group>

                                                <Form.Group size="lg" controlId="password">
                                                    <Form.Label style={labelStyle}>Change password:</Form.Label>
                                                    <Form.Control
                                                    style={inputStyle}
                                                    placeholder="Enter new password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    pattern={
                                                        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*/(/))]{6,20}$"
                                                    }
                                                    required={error.password}
                                                    />
                                                    <span className={"spanErr"}>{errorMsg.password}</span>
                                                </Form.Group>

                                                <Form.Group size="lg" controlId="number">
                                                    <Form.Label style={labelStyle}>CIPC:</Form.Label>
                                                    <Form.Control
                                                    style={inputStyle}
                                                    placeholder={"CIPC"}
                                                    type="text"
                                                    value={CIPC}
                                                    onChange={(e) => setCIPC(e.target.value)}
                                                    pattern={"[a-zA-Z0-9]{4}/[0-9]{6}/[0-9]{2}"}
                                                    required={error.CIPC}
                                                    />
                                                    <span className={"spanErr"}>{errorMsg.CIPC}</span>
                                                </Form.Group>

                                                <Form.Group size="lg" controlId="text">
                                                    <Form.Label style={labelStyle}>Company Name:</Form.Label>
                                                    <Form.Control
                                                    style={inputStyle}
                                                    placeholder={"Name"}
                                                    type="text"
                                                    value={companyName}
                                                    onChange={(e) => setcompanyName(e.target.value)}
                                                    pattern={"^[A-Za-z0-9 /( /)]{3,40}$"}
                                                    required={error.name}
                                                    />
                                                    <span className={"spanErr"}>{errorMsg.username}</span>
                                                </Form.Group>

                                            </Col>

                                            <Col style={{marginLeft: 20}}>
                                                <Form.Group size="lg" controlId="text">
                                                    <Form.Label style={labelStyle}>Company Adress:</Form.Label>
                                                    <Form.Control
                                                    style={inputStyle}
                                                    placeholder={"Address"}
                                                    type="text"
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    required={error.address}
                                                    />
                                                    <span className={"spanErr"}>{errorMsg.address}</span>
                                                </Form.Group>

                                                <Form.Group size="lg" controlId="text">
                                                    <Form.Label style={labelStyle}>Select Province:</Form.Label>
                                                    <Form.Select
                                                    aria-label={"Province"}
                                                    style={selectStyle}
                                                    required={error.province}
                                                    onChange={(e) => setProvince(e.target.value)}
                                                    >
                                                    {/* <option value={"Gauteng"}>{"Gauteng"}</option> */}
                                                    <option value={""}></option>
                                                    <option value={"Gauteng"}>Gauteng</option>
                                                    <option value={"Limpopo"}>Limpopo</option>
                                                    <option value={"Estern Cape"}>Estern Cape</option>
                                                    <option value={"Free State"}>Free State</option>
                                                    <option value={"KwaZulu - Natal"}>KwaZulu - Natal</option>
                                                    <option value={"Mpumalanga"}>Mpumalanga</option>
                                                    <option value={"Northern Cape"}>Northern Cape</option>
                                                    <option value={"North West"}>North West</option>
                                                    <option value={"Western Cape"}>Western Cape</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <Form.Group
                                                    size="lg"
                                                    controlId="formFile"
                                                    name="photo"
                                                    className="mb-3"
                                                    style={{marginTop: 30}}
                                                >
                                                    <Form.Label style={labelStyle}>Change Logo Image:</Form.Label>
                                                    <Form.Control
                                                    type="file"
                                                    onChange={(e) => console.log("Update photo clicked")}
                                                    required={error.photo}
                                                    />
                                                </Form.Group>
                                                <div style={errorStyle}>{formError}</div>

                                                <Button
                                                    style={btnStyle}
                                                    block="true"
                                                    size="lg"
                                                    onClick = {(e) => console.log("Update details clicked")}
                                                >
                                                    {"Update"}
                                                </Button>
                                            </Col>
                                        </Row> 
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

const bStyle = {
    fontWeight: 550,
    fontFamily: 'Poppins',
    background: 'transparent',
    border: '2px solid orangered',
    color: 'orangered',
    fontSize: 21,
    marginLeft: 20,
    marginTop: 10,
}

const imgStyle = {
    borderRadius: 90,
    textAlign: 'center',
    width: 180,
    height: 180,
    marginTop: 30,
    border: '2px solid #222',
}


const wrapStyle = {
    margin: '40px 0px',
    minHeight: 300,
}


const errorMsg = {
    email: "It should be a valid email address!",
    password:
      "Must contain at least 6 or more characters, one special character, one uppercase and lowercase letter and one number!",
    confirmPaaword: "Passwords do not match!",
    username:
      "Username should be 3-30 characters  and shouldn't include any special characters!",
    CIPC: "Invalid company registration number format. valid formart is YYYY/NNNNNN/NN",
    address: "Address Should be entered!",
    province: "Please make sure a province is selected!",
};
  
const errorStyle = {
    fontSize: "16px",
    color: "red",
};

const formStyle = {
    margin: "auto",
    borderRadius: "5px",
    display: "block",
    fontSize: "16px",
};
  
const labelStyle = {
    margin: "10px 0 0 0",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "17px",
    fontWeight: "500",
    color: "#000",
};
  
const inputStyle = {
    padding: "5px",
    marginBottom: 10,
    border: "1px solid #333",
    background: "rgb(245, 245, 245)",
    borderRadius: "3px",
    boxSizing: "border-box",
    width: "100%",
    color: "#000",
    fontSize: "15px",
};
  
const selectStyle = {
    padding: "5px",
    border: "1px solid #333",
    borderRadius: "3px",
    boxSizing: "border-box",
    width: "100%",
    color: "#000",
    fontSize: "15px",
};
  
const btnStyle = {
    margin: "30px 0 0 0",
    padding: "7px 10px",
    border: "1px solid #fff",
    borderRadius: "5px",
    background: "rgba(255,67,0, 1)",
    width: "100%",
    fontSize: "16px",
    color: "#fff",
    display: "block",
  }
  