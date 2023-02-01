import React from "react";
import Base from "./Base";
import { Cards1 } from "./Components/Cards";
import { LineChart, PieChart, ColumnChart } from "react-chartkick";
import { Card } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Dashboard() {
  let data = [
    {
      class1: "aside1",
      class2: "duration1",
      class3: "Price",
      title: "Earnings (MONTHLY)",
      price: "$ 40,000",
    },
    {
      class1: "aside2",
      class2: "duration2",
      class3: "Price",
      title: "Earnings (ANNUAL)",
      price: "$ 215,000",
    },
    {
      class1: "aside3",
      class2: "duration3",
      class3: "Price",
      title: "Task",
      price: "50%",
    },
    {
      class1: "aside4",
      class2: "duration4",
      class3: "Price",
      title: "Pending Request",
      price: "18",
    },
  ];
  let data1 = [
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
      <div className="startheading">Dashboard</div>
      {data.map((iteam) => (
        <Cards1
          class1={iteam.class1}
          class2={iteam.class2}
          class3={iteam.class3}
          title={iteam.title}
          price={iteam.price}
        />
      ))}
      <AreaChart />
      <Piechart />
      <Columnchart />
      {data1.map((iteam) => (
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
    </Base>
  );
}

export default Dashboard;

function AreaChart() {
  return (
    <Card className="">
      <Card.Header>Area Chart</Card.Header>
      <Card.Body>
        <Card.Text>
          <LineChart data={{ "2021-05-13": 2, "2021-05-14": 5 }} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Piechart() {
  return (
    <Card className="">
      <Card.Header>Piechart</Card.Header>
      <Card.Body>
        <Card.Text>
          <PieChart
            data={[
              ["Blueberry", 44],
              ["Strawberry", 23],
              ["Banana", 13],
              ["Apple", 10],
              ["Grap", 10],
            ]}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Columnchart() {
  return (
    <Card className="">
      <Card.Header>Column chart</Card.Header>
      <Card.Body>
        <Card.Text>
          <ColumnChart
            data={[
              ["Sun", 32],
              ["Mon", 46],
              ["Tue", 28],
              ["Wed", 10],
              ["Thu", 15],
              ["Fri", 20],
              ["Sat", 25],
            ]}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
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
