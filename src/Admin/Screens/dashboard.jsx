import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ChartOne from '../Extras/revenueChart';
import ChartTwo from '../Extras/orderChart';

function formatMoney(n) {
    return "R" + (Math.round(n * 100) / 100).toLocaleString();
}

export default function Dashboard() {
    return (
        <>
            <div style={mainStyle}>
                <h2 style={headingStyle}>Dashboard</h2>
                <FeaturedInfo />
                <Row style={{  marginTop: 10 }}>
                    <Col>
                        <div style={{ padding: '5px 0' }}><ChartOne /></div>
                    </Col>
                    <Col style={{ marginLeft: 20 }}>
                        <div style={{ padding: '5px 0' }}><ChartTwo /></div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

function FeaturedInfo() {
    return (
        <div style={{ margin: "20px 20px 0 20px" }}>
            <Row>
                <Col style={sumColMg}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Total Orders</span>
                        <div>
                            <span style={moneyStyle}>{5790}</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>Overall total</span>
                            <span style={spStyle}>TO</span>
                        </div>
                    </div>
                </Col>
                <Col style={sumColMg}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Active Customers</span>
                        <div>
                            <span style={moneyStyle}>{40}</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>This month</span>
                            <span style={spStyle}>AC</span>
                        </div>
                    </div>
                </Col>
                <Col style={summaryCol}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Active Suppliers</span>
                        <div>
                            <span style={moneyStyle}>{10}</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>This month</span>
                            <span style={spStyle}>AS</span>
                        </div>
                    </div>
                </Col>
            </Row>


            <Row>
                <Col style={sumColMg}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Credit Orders</span>
                        <div>
                            <span style={moneyStyle}>{formatMoney(16097)}</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>This month</span>
                            <span style={spStyle}>CR</span>
                        </div>
                    </div>
                </Col>
                <Col style={sumColMg}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Cash Orders</span>
                        <div>
                            <span style={moneyStyle}>{formatMoney(36080)}</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>This month</span>
                            <span style={spStyle}>CO</span>
                        </div>
                    </div>
                </Col>
                <Col style={summaryCol}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Cost Savings</span>
                        <div>
                            <span style={moneyStyle}>{formatMoney(7860)}</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>This month</span>
                            <span style={spStyle}>CS</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const mainStyle = {
    color: '#000',
    padding: '20px',
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
    background: 'rgba(230, 3, 39, .7)',
    color: 'rgba(230, 3, 39, 1)',
    fontWeight: 'bold',
    borderRadius: 4,
    margin: 'auto',
    right: 0,
    bottom: 0,
}
