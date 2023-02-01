import React from "react";
import Base from "../Base";
import "./Animation.css";
import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Animation(props) {
  let data = [
    {
      title: ".animated--grow-in",
      text: "Navbar Dropdown Example:",
      des: "Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, the grow in animation is only being used on dropdowns within the navbar.",
      heading: "Grow In Animation Utilty",
      dispaly: "link",
    },
    {
      title: ".animated--fade-in",
      text: "Navbar Dropdown Example:",
      des1: "Dropdown Button Example:",
      btntext: "Dropdown",
      des: "Note: This utility animates the CSS opacity property, meaning it will override any existing opacity on an element being animated!",
      heading: "Fade In Animation Utilty",
      display: "drop1",
    },
  ];

  return (
    <Base>
      <div className="startheading">
        Animation Utilities
        <p className="para">
          Bootstrap's default utility classes can be found on the official
          Bootstrap Documentation page. The custom utilities below were created
          to extend this theme past the default utility classes built into
          Bootstrap's framework.
        </p>
      </div>
      <div className="anicards">
        {data.map((iteam) => (
          <Cards
            title={iteam.title}
            text={iteam.text}
            des={iteam.des}
            heading={iteam.heading}
            des1={iteam.des1}
            btntext={iteam.btntext}
            dispaly={iteam.dispaly}
          />
        ))}
      </div>
    </Base>
  );
}

export default Animation;

function Cards(props) {
  return (
    <Card>
      <Card.Header>
        <p className="anihead">{props.heading}</p>
      </Card.Header>
      <Card.Body>
        <p className="red">{props.title}</p>
        <p>{props.tex}</p>
        <div>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav style={{ maxHeight: "100px" }} navbarScroll>
                  <NavDropdown title="Link">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <p>{props.des1}</p>
        <div>
          <DropdownButton
            title="Dropdown"
            id="bg-nested-dropdown"
            className={props.dispaly}
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </div>
        <p>{props.des}</p>
      </Card.Body>
    </Card>
  );
}
