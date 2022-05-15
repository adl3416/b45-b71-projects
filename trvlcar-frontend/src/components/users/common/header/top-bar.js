import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import ContactBar from './contact-bar'
import SocialBar from './social-bar'
import "./top-bar.css"





const TopBar = () => {
  return (
    <div className="topbar">
        <Container>
            <Row>
                 <Col lg={3} className="d-none dg-lg-blok"> <SocialBar/> </Col>   {/*  className="d-none dg-lg-blok":sadece genis ekranda gozuksun */}
                 <Col lg={9}> <ContactBar/> </Col>
            </Row>
        </Container>
    </div>
  )
}

export default TopBar