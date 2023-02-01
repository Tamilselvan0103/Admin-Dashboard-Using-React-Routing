import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from "react-router-dom";


function Base({children}){
  const history = useHistory();
    return(
        <div className="layout Container">
           <div className="nav1">

           <Navbar color = "white" expand="lg">
          <Container fluid>
            <Navbar.Brand onClick={()=>history.push("/")}>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>Account</Nav.Link>
                <Nav.Link onClick={()=>history.push("/login")}>Login</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
           </div>
           <div className="sidebar aside">
           <div>
          <p className="ad">
            <span class="material-symbols-outlined">sentiment_satisfied</span>{" "}
            SB ADMIN <sup>2</sup>
          </p>
        </div>
        <hr />
        <p className="text"  onClick={()=>history.push("/")}>Dashbord</p>
        <hr />
        <div className="firstcl">
          <p className="head">INTERFACE</p>
          <Dropdown>
            <Dropdown.Toggle
              variant="inherit"
              className="drop"
              id="dropdown-basic"
            >
              Components
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <p className="text-muted head">CUSTOM COMPONENTS</p>
              <Dropdown.Item  onClick={()=>history.push("/button")}>Button</Dropdown.Item>
              <Dropdown.Item  onClick={()=>history.push("/cards")}>Cards</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <br /> */}
          <Dropdown>
            <Dropdown.Toggle
              variant="inherit"
              className="drop"
              id="dropdown-basic"
            >
              Utilities
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <p className="text-muted head">CUSTOM UTILITIES</p>
              <Dropdown.Item  onClick={()=>history.push("/colors")}>Colors</Dropdown.Item>
              <Dropdown.Item  onClick={()=>history.push("/border")}>Borders</Dropdown.Item>
              <Dropdown.Item  onClick={()=>history.push("/animation")}>Animation</Dropdown.Item>
              <Dropdown.Item onClick={()=>history.push("/others")}>other</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <hr />
        <div>
          <p className="head">ADDONS</p>
          <Dropdown>
            <Dropdown.Toggle
              variant="inherit"
              className="drop"
              id="dropdown-basic"
            >
              Pages
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <p className="text-muted head" >LOGIN SCREENS:</p>
              <Dropdown.Item  onClick={()=>history.push("/login")}>Login</Dropdown.Item>
              <Dropdown.Item  onClick={()=>history.push("/register")}>Register</Dropdown.Item>
              <Dropdown.Item  onClick={()=>history.push("/forgot")}>ForgotPassword</Dropdown.Item>
              <p className="text-muted head" onClick={()=>history.push("/")}>OTHER PAGES:</p>
              <Dropdown.Item  onClick={()=>history.push("/error")}>404 Page</Dropdown.Item>
              <Dropdown.Item  onClick={()=>history.push("/blankpage")}>Blank page</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <p className="text" onClick={()=>history.push("/charts")}>Charts</p>
        </div>
        <div>
          <p className="text">Tables</p>
        </div>
        <hr />


           </div>
           <div className="main">{children}</div>
        </div>
    )
}

export default Base