import react from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from "./components/Footer"

class App extends react.Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: "Joe McCann",
      headerLinks: [
        {Title: 'Home', paths: "/"},
        {Title: 'About', paths: "/about"},
        {Title: 'Contact', paths: "/contact"}
      ],
      home: {
        Title: "A wise choice",
        subTitle: "A man of many talents",
        subSubTitle: "Check out my projects below"
      },
      about: {
        Title: "About Me",
      },
      contact: {
        Title: "Let's Talk",
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Joe McCann</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer/>

        </Container>
      </Router>
      );
  }
}

export default App;
