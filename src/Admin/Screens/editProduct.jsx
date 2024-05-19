import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

export default function EditProduct({ setEdit }) {
    const [disable, setDisable] = useState(false)

    const changeView = React.useCallback(value => {
        setEdit(value)
    }, [setEdit])

    return (
        <div style={{ marginTop: 30 }}>
            <Button
                onClick={() => changeView(false)}
                style={bStyle}> {'< Back'}
            </Button>
            <div style={{ position: 'relative' }}>
                <Button
                    style={newProdStyle}
                    display='block'
                    onClick={() => setDisable(!disable)}
                >
                    {disable ? 'Enable product' : 'Disable product'}
                </Button>
                <NewProduct />
            </div>
        </div>
    )
}

const NewProduct = () => {
    const [mainProd, setMainProd] = useState({ name: '', img: null })
    const [products, setProd] = useState([
        {
            description: '',
            price: null,
            volume: '',
        },
        {
            description: '',
            price: null,
            volume: '',
        },
    ])

    const addSubProduct = (e) => {
        e.preventDefault()
        setProd([...products, {
            description: '',
            price: null,
            volume: '',
        }])
    }

    const removeSubProduct = (e, idx) => {
        e.preventDefault()
        const list = [...products]
        list.splice(idx, 1)
        setProd(list)
    }

    const changeName = (e, idx) => {
        const list = [...products]
        list[idx][e.target.name] = e.target.value;
        setProd(list)
    }

    const onUpload = (e) => {
        e.preventDefault()
    }

    return (
        <div style={{ paddingTop: 80, margin: '0 20px' }}>
            <Form style={formStyle}>
                <div>
                    <Row>
                        <Col style={{ marginRight: 20 }}>
                            <Form.Group size="lg" controlId="Product name">
                                <Form.Label style={labelStyle}>Product name:</Form.Label>
                                <Form.Control
                                    style={inputStyle}
                                    placeholder={'Enter product name'}
                                    value={mainProd.name}
                                    onChange={(e) => setMainProd({ name: e.target.value })}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group
                                size="lg"
                                controlId="formFile"
                                name="photo"
                                className="mb-3"
                                required
                                style={{marginTop: 25, marginLeft: 20}}
                            >
                                <Form.Label style={labelStyle}>Select product image:</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={(e) => setMainProd({ ...mainProd, [mainProd.img]: e.target.value })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    {products.map((prod, idx) => (
                        <>
                            <div style={{ marginLeft: 0 }} key={idx}>
                                <Form style={formStyle}>
                                    <div>
                                        <Row>
                                            <Col style={{ marginRight: 10, flex: 3 }}>
                                                <Form.Group size="lg" controlId="description">
                                                    <Form.Label style={labelStyle}>Description:</Form.Label>
                                                    <Form.Control
                                                        style={inputStyle}
                                                        type='text'
                                                        name='description'
                                                        placeholder={'Enter name'}
                                                        value={prod.description}
                                                        onChange={(e) => changeName(e, idx)}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col style={{ flex: 1.5 }}>
                                                <Form.Group size="lg" controlId="price">
                                                    <Form.Label style={labelStyle}>Price:</Form.Label>
                                                    <Form.Control
                                                        style={inputStyle}
                                                        placeholder={'Enter price'}
                                                        type="Number"
                                                        name='price'
                                                        value={prod.price}
                                                        onChange={(e) => changeName(e, idx)}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>

                                            <Col style={{ marginLeft: 10, flex: 1.5 }}>
                                                <Form.Group size="lg" controlId="volume">
                                                    <Form.Label style={labelStyle}>Select volume:</Form.Label>
                                                    <Form.Select
                                                        aria-label={prod.volume}
                                                        style={inputStyle}
                                                        name='volume'
                                                        value={prod.volume}
                                                        onChange={(e) => changeName(e, idx)}
                                                        required
                                                    >
                                                        <option value={prod.volume}>{prod.volume}</option>
                                                        <option value={"m^3"}>m^3</option>
                                                        <option value={"Unit price"}>Unit price</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            {products.length > 1 &&
                                                <Col style={{ marginTop: 17, marginLeft: 10 }}>
                                                    <Button
                                                        style={btnStyle2}
                                                        block="true"
                                                        size="lg"
                                                        onClick={(e) => removeSubProduct(e, idx)}
                                                    >
                                                        Remove
                                                    </Button>
                                                </Col>
                                            }
                                        </Row>
                                    </div>
                                </Form >
                            </div >
                        </>
                    ))}
                </div>

                <span>
                    <Button
                        style={btnStyle}
                        block="true"
                        size="lg"
                        onClick={(e) => addSubProduct(e)}
                    >
                        + Add Sub Product
                    </Button>
                </span>
                <span>
                    <Button
                        style={btnStyle}
                        block="true"
                        size="lg"
                        onClick={(e) => onUpload(e)}
                    >
                        { "Upload product"}
                    </Button>
                </span>
            </Form>
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

const newProdStyle = {
    position: 'absolute',
    margin: 20,
    padding: 10,
    borderRadius: 5,
    border: '1px solid transparent',
    background: 'orangered',
    fontFamily: 'Poppins',
    color: 'white',
    left: 0,
    top: 0,
}

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
    marginBottom: 20,
    border: "1px solid #333",
    background: "rgb(245, 245, 245)",
    borderRadius: "3px",
    boxSizing: "border-box",
    width: "100%",
    color: "#000",
    fontSize: "15px",
};

const btnStyle = {
    padding: "7px 10px",
    margin: '20px 0 0 0',
    border: "1px solid #fff",
    borderRadius: "5px",
    background: "rgba(255,67,0, 1)",
    width: "200px",
    fontSize: "16px",
    color: "#fff",
    display: "block",
}

const btnStyle2 = {
    padding: 7,
    border: "1px solid #fff",
    borderRadius: "5px",
    background: "rgba(255,67,0, 1)",
    width: "100px",
    fontSize: "16px",
    color: "#fff",
    display: "block",
}
