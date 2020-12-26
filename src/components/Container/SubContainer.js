import React from 'react'
import { Container, Row } from "react-bootstrap";
import './SubContainer.css'


const SubContainer = (props) => {
    return (
        <Container fluid className="subContainer">
            <Row {...props}>
                {props.children}
            </Row>
       </Container>
    )
}

export default SubContainer
