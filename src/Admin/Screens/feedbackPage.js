import React from 'react'
import { Row, Col } from 'react-bootstrap'
import StarRating from 'react-star-rating-component'

export default function Feedback() {
    var data = [
        {
            userName: 'Davis Labone',
            rating: 3,
            message: `Message here... We think arom but we do not have the letter see, i know you get me right *_-
            Anyways I had a great servi..see! @_@`,
        },
        {
            userName: 'Pravishkat Lwetid',
            rating: 5,
            message: `I know you get me right *_-
            Anyways I had a great servi..see! STILL SIMILAR MESSAGE JUST With some additional says be..ause see! ... O_O`,
        },
        {
            userName: 'Hoshreen Durate',
            rating: 3.7,
            message: `Message here... We think arom but we do not have the letter see, i know you get me right *_-
            Anyways The servi..see I had was not pleasing at all, the delivery got here late *O*`,
        },
        {
            userName: 'Donos Panda',
            rating: 2.5,
            message: `Message here... We think arom but we do not have the letter see, i know you get me right *_-
            Anyways I had a great servi..see! @_@. Hayaya angati mina.. kodwa it was not that bad shem...`,
        },
        {
            userName: 'Roriaring Rorer',
            rating: 4,
            message: `Message here... We think arom but we do not have the letter see, i know you get me right *_-
            Anyways I had a great servi..see! @_@`,
        },
    ]
    return (
        <div style={mainStyle}>
            <h2 style={headingStyle}>Feedbacks</h2>
            <Row>
                {data.map((item, i) => (
                    <Col key={i} xs="auto" md={6}>
                        <Featured item={item} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

function Featured(param) {
    return (
        <div style={featureStyle}>
            <Row>
                <Col style={{textAlign: 'left', marginTop: 20, flex:3.7}}>
                    <div style={{ fontWeight: 'bold' }}>{param.item.userName}</div>
                    <div>
                        <StarRating
                            name='rating'
                            starCount={5}
                            emptyStarColor={'rgba(125,125,125,.8)'}
                            value={param.item.rating}
                        />
                    </div>
                </Col>
            </Row>
            <div style={{marginTop: 5}}>{param.item.message}</div>
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

const featureStyle = {
    padding: '20px',
    color: '#000',
    fontFamily: 'Poppins',
    borderRadius: '10px',
    margin: '20px',
    boxShadow: '1px 2px 2px 1px rgba(230, 3, 39, .8)',
}