import React from 'react'
import { Row, Col } from 'react-bootstrap';
import OrdersTable from '../Extras/orders table.jsx';

export default function Orders() {
    return (
        <div style={mainStyle}>
            <h2 style={headingStyle}>Orders</h2>
            <Featured />
            <div style={tableStyle}>
                <div style={tableHStyle}>Orders</div>
                <OrdersTable />
            </div>
        </div>
    )
}

function Featured() {
    return (
        <>
            <Row style={{ margin: '25px 10px 0 20px', }}>
                <Col style={sumColMg}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>EFT Orders</span>
                        <div>
                            <span style={moneyStyle}>{3000}</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>Overall total</span>
                            <span style={spStyle}>TO</span>
                        </div>
                    </div>
                </Col>
                <Col style={sumColMg}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Card Orders</span>
                        <div>
                            <span style={moneyStyle}>{790}</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>Overall total</span>
                            <span style={spStyle}>EC</span>
                        </div>
                    </div>
                </Col>
                <Col style={summaryCol}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Credit Orders</span>
                        <div>
                            <span style={moneyStyle}>{2000}</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>Overall total</span>
                            <span style={spStyle}>CO</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

const mainStyle = {
    color: '#000',
    padding: '20px 20px 50px 20px',
    minHeight: "100vh",
}

const headingStyle = {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    margin: '0px 20px 0 20px',
    padding: 20,
    color: 'white',
    background: '#333',
    borderRadius: 5,
}


const tableStyle = {
    width: '97%',
    margin: '30px 0 0px 20px',
}

const tableHStyle = {
    padding: "20px 0px 20px 20px",
    width: '99.5%',
    background: 'rgba(230, 3, 39, 1)',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 21,
    color: 'white',
}

const summaryCol = { width: "32%", minWidth: 200 }
const sumColMg = { ...summaryCol, marginRight: 10 }

const featureItemStyle = {
    padding: '20px',
    color: '#000',
    fontFamily: 'Poppins',
    borderRadius: '10px',
    cursor: 'pointer',
    margin: '5px 0',
    boxShadow: '1px 2px 2px 1px rgba(230, 3, 39, 1)',
}

const titleStyle = {
    fontWeight: 'bold',
}

const moneyStyle = {
    fontSize: '30px',
    fontFamily: 'serif',
    fontWeight: '600',
}

const subStyle = {
    color: 'gray',
    fontSize: '15px',
}

const spStyle = {
    position: 'absolute',
    padding: '8px 20px',
    background: 'rgba(230,3,39,.7)',
    color: 'rgba(230,3,39,1)',
    fontWeight: 'bold',
    borderRadius: 4,
    margin: 'auto',
    right: 0,
    bottom: 0,
}
