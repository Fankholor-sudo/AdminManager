import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../Styles/admin.css";
import {
  AssessmentRounded,
  PeopleRounded,
  Timeline,
  FeedbackRounded,
  StorefrontRounded,
  LocalMallRounded,
} from "@material-ui/icons";
import Dashboard from "./dashboard";
import Analytics from "./analyticsPage"
import Suppliers from "./supplierPage"
import Products from "./productsPage"
import Orders from "./ordersPage"
import Feedback from "./feedbackPage"
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const [state, setState] = useState("Dashboard");
  const [isHovered, setIsHovered] = useState(false);

  function select(name) {
    setState(name);
  }

  const signOutBtn = {
    position: "absolute",
    bottom: 20,
    width: 100,
    height: 45,
    marginLeft: 5,
    color: "#fff",
    borderRadius: 5,
    border: "2px solid orangered",
    background: "transparent",
    cursor: "pointer",
    ...(isHovered && {
      background: "orangered",
      color: "#fff",
    }),
  }
  
  return (
    <div>
      <Row>
        <Col style={sideBarStyle}>
          <div style={navStyle}>
            <div style={headingStyle}>Admin</div>
            <div
              className="tile"
              style={state === "Dashboard" ? activeStyle : tileStyle}
              onClick={() => select("Dashboard")}
            >
              <span>
                <AssessmentRounded />
              </span>
              <span style={spanStyle}>Dashboard</span>
            </div>

            <div
              className="tile"
              style={state === "Analytics" ? activeStyle : tileStyle}
              onClick={() => select("Analytics")}
            >
              <span>
                <Timeline />
              </span>
              <span style={spanStyle}>Analytics</span>
            </div>

            <div
              className="tile"
              style={state === "Suppliers" ? activeStyle : tileStyle}
              onClick={() => select("Suppliers")}
            >
              <span>
                <PeopleRounded />
              </span>
              <span style={spanStyle}>Suppliers</span>
            </div>
            <div
              className="tile"
              style={state === "Products" ? activeStyle : tileStyle}
              onClick={() => select("Products")}
            >
              <span>
                <StorefrontRounded />
              </span>
              <span style={spanStyle}>Products</span>
            </div>

            <div
              className="tile"
              style={state === "Orders" ? activeStyle : tileStyle}
              onClick={() => select("Orders")}
            >
              <span>
                <LocalMallRounded />
              </span>
              <span style={spanStyle}>Orders</span>
            </div>

            <div
              className="tile"
              style={state === "Feedback" ? activeStyle : tileStyle}
              onClick={() => select("Feedback")}
            >
              <span>
                <FeedbackRounded />
              </span>
              <span style={spanStyle}>Feedback</span>
            </div>
            <Button
              onClick={() => navigate("/signin")}
              style={signOutBtn}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >Logout</Button>
          </div>
        </Col>
        <Col style={mainStyle}>
          {state === "Dashboard" && <Dashboard />}
          {state === "Analytics" && <Analytics />}
          {state === "Suppliers" && <Suppliers />}
          {state === "Products" && <Products />}
          {state === "Orders" && <Orders />}
          {state === "Feedback" && <Feedback />}
        </Col>
      </Row>
    </div>
  );
}

const headingStyle = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: "30px",
  fontFamily: "Poppins",
  textAlign: "center",
  margin: "0 0 20px 0",
};

const mainStyle = {
  width: "78%",
  marginLeft: "21%",
};

const sideBarStyle = {
  background: "#333",
  border: "1px solid #222",
  overflowY: "auto",
  position: "fixed",
  height: "100%",
  width: '22%',
};

const navStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "20px 0px 100px 10px",
};

const spanStyle = {
  verticalAlign: "text-top",
};

const tileStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: "#f8f8f8",
  color: "orangered",
};

const activeStyle = {
  ...tileStyle,
  backgroundColor: "orangered",
  color: "#fff",
};
