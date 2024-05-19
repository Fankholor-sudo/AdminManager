import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ChartThree from '../Extras/reOrdersChart';
import ChartFour from '../Extras/summaryChart';

export default function Analytics() {
    return (
        <div style={mainStyle}>
            <h2 style={headingStyle}>Analytics</h2>
            <Featured />
            <Charts />
        </div>
    )
}

const Charts = () => (
    <Row style={container}>
        <Col>
            <div style={{ padding: '1px 0' }}><ChartThree /></div>
        </Col>
        <Col style={{ marginLeft: 20 }}>
            <div style={{ padding: '1px 0' }}><ChartFour /></div>
        </Col>
    </Row>
);

function Featured() {
    return (
        <div style={container}>
            <Row>
                <Col style={sumColMg}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Total Refunds</span>
                        <div>
                            <span style={moneyStyle}>23</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>This month</span>
                            <span style={spStyle}>TR</span>
                        </div>
                    </div>
                </Col>
                <Col style={sumColMg}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Total Products</span>
                        <div>
                            <span style={moneyStyle}>143</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>This month</span>
                            <span style={spStyle}>TP</span>
                        </div>
                    </div>
                </Col>
                <Col style={summaryCol}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Supplier Ratings</span>
                        <div>
                            <span style={moneyStyle}>3.6</span>
                            <span style={rateStyle}>***_ _ </span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>Overall total</span>
                            <span style={spStyle}>SR</span>
                        </div>
                    </div>
                </Col>
            </Row>


            <Row>
                <Col style={sumColMg}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Total Re-Orders</span>
                        <div>
                            <span style={moneyStyle}>894</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>This month</span>
                            <span style={spStyle}>TR</span>
                        </div>
                    </div>
                </Col>
                <Col style={sumColMg}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Product Reviews</span>
                        <div>
                            <span style={moneyStyle}>37</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>Overall total</span>
                            <span style={spStyle}>PR</span>
                        </div>
                    </div>
                </Col>
                <Col style={summaryCol}>
                    <div style={featureItemStyle}>
                        <span style={titleStyle}>Average days to refund</span>
                        <div>
                            <span style={moneyStyle}>{5} days</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span style={subStyle}>This month</span>
                            <span style={spStyle}>AR</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const container = { margin: "20px 20px 0 20px" }

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

const rateStyle = {
    marginLeft: '15px',
    fontFamily: 'serif',
    alignItems: 'center',
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