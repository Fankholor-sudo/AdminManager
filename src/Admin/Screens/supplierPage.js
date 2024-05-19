import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import UserProfile from "./userProfile";

export default function Suppliers(props) {
    const [view, setView] = useState(false)

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 150,
        },
        {
            field: 'Name',
            headerName: 'Name',
            width: 230,
        },
        {
            field: 'CIPC',
            headerName: 'CIPC',
            width: 200,
        },
        {
            field: 'NoSupply',
            headerName: 'Number of Supply',
            width: 200,
        },
        {
            field: 'Rating',
            headerName: 'Rating',
            width: 150,
        },
        {
            field: 'Action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Button
                            onClick={() => setView(true)}
                            style={{
                                background: 'transparent',
                                border: '1px solid rgba(230, 3, 39, 1)',
                                borderRadius: 5,
                                padding: '0px 10px',
                                width: 100,
                                height: 35,
                                color: '#000',
                            }}
                        >
                            View
                        </Button>
                    </>
                )
            }
        }

    ];

    const rows = [
        { id: 1, Name: 'Snow (Pty) Ltd', CIPC: '2001/001152/11', NoSupply: 10 , Rating: 2 },
        { id: 2, Name: 'Lannister (Pty) Ltd', CIPC: '1998/287252/11', NoSupply: 5 , Rating: 4 },
        { id: 3, Name: 'Lannister (Pty) Ltd', CIPC: '2120/123252/11', NoSupply: 7 , Rating: 2.8 },
        { id: 4, Name: 'Stark (Pty) Ltd', CIPC: '2019/225252/11', NoSupply: 13  , Rating: 1 },
        { id: 5, Name: 'Targaryen (Pty) Ltd', CIPC: '2012/225252/11', NoSupply: 3  , Rating: 5 },
        { id: 6, Name: 'Melisandre (Pty) Ltd', CIPC: '2882/225252/11', NoSupply: 15 , Rating: 2.5 },
        { id: 7, Name: 'Clifford (Pty) Ltd', CIPC: '2212/878252/11',  NoSupply: 4 ,Rating: 4 },
        { id: 8, Name: 'Frances (Pty) Ltd', CIPC: '2212/015252/11',  NoSupply: 10 ,Rating: 3.5 },
        { id: 9, Name: 'Roxie (Pty) Ltd', CIPC: '2212/225287/11', NoSupply: 17 , Rating: 4 },
    ];

    return (
        <div style={mainStyle}>
            <h2 style={headingStyle}>Suppliers</h2>
            {view && <UserProfile setNewView={setView} />}
            {!view && <>
                <Featured />
                <div style={tableStyle}>
                    <div style={tableHStyle}>Supplier Info</div>
                    <DataGrid
                        rows={rows}
                        components={{ Toolbar: GridToolbar }}
                        columns={columns}
                        pageSize={7}
                        rowsPerPageOptions={[7]}
                        checkboxSelection
                    />
                </div>
            </>}
        </div>
    )
}

function Featured() {
    return (
        <Row style={{ margin: '20px 10px 0 30px', }}>
            <Col style={{ ...summaryCol, marginRight: 20 }}>
                <div style={featureItemStyle}>
                    <span style={titleStyle}>Total Suppliers</span>
                    <div>
                        <span style={moneyStyle}>{18}</span>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span style={subStyle}>Overall total</span>
                        <span style={spStyle}>TS</span>
                    </div>
                </div>
            </Col>
            <Col style={summaryCol}>
                <div style={featureItemStyle}>
                    <span style={titleStyle}>New Supplier</span>
                    <div>
                        <span style={moneyStyle}>9</span>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span style={subStyle}>This month</span>
                        <span style={spStyle}>NS</span>
                    </div>
                </div>
            </Col>
        </Row>
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

const tableStyle = {
    height: 650,
    width: '97%',
    margin: '35px 0 10px 20px',
    paddingBottom: 100,
}

const tableHStyle = {
    padding: '20px 20px',
    background: 'rgba(230, 3, 39, 1)',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 21,
    color: 'white',
}

const summaryCol = { width: "47%", minWidth: 200 }

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
