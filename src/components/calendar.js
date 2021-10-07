import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./calendar.css";
import 'react-calendar/dist/Calendar.css';
import {Container, Row, Col, Navbar} from 'react-bootstrap';
import { Inject, ScheduleComponent, Day, Agenda} from '@syncfusion/ej2-react-schedule';


export function ReactCalendar() {

    const [value, onChange] = useState(new Date());

    return(
    <div className="calendar">
        <div>
        <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src="https://react-bootstrap.github.io/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Calendar
      </Navbar.Brand>
    </Container>
  </Navbar>
        </div>

    <Container fluid>
    <Row>

      {/* 1st Column */}
    <Col className="col1">
    <Calendar
        onChange={onChange}
        value={value}
    />
    </Col>

      {/* 2nd Column */}
    <Col xs={5}>
        <ScheduleComponent>
                <Inject services={[Day, Agenda]} />
        </ScheduleComponent>
    </Col>

     {/* Third Column */}
    <Col>
      Event Details
    </Col>

    </Row> 
    </Container>
</div>
);
}
