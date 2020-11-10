import React, { Component } from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { FaAngleDown } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaTh } from "react-icons/fa";

class Navbarr extends Component {
  render() {
    return (
      <Navbar expand="lg" id="navbar" >
        <Navbar.Brand href="#home">Stocks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Pages<FaAngleDown /></Nav.Link>
            <Nav.Link href="#link">Reports<FaAngleDown /></Nav.Link>
            <Nav.Link href="#link">Apps<FaAngleDown /></Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#home"><FaSistrix /></Nav.Link>
            <Nav.Link href="#link"><FaBell /></Nav.Link>
            <Nav.Link href="#link"><FaCog /></Nav.Link>
            <Nav.Link href="#link">Hi, Djha</Nav.Link>
            <Nav.Link href="#link"><FaUserCircle /></Nav.Link>
            <Nav.Link href="#link"><FaTh /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navbarr;




