/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {  Container, Row, FormGroup,
          Input,
          InputGroupAddon,
          InputGroupText,
          InputGroup, Col, Button } from "reactstrap";

// core components
import SimpleFooter from "components/Footers/SimpleFooter.jsx";


// index page sections



class Users extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
        <section className="section pb-0 section-components">
          <Container className="mb-10">
            <Row>
          <Col lg="8" sm="6">
                <FormGroup
                  className={classnames({
                    focused: this.state.searchFocused
                  })}
                >
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Search"
                      type="text"
                      onFocus={e => this.setState({ searchFocused: true })}
                      onBlur={e => this.setState({ searchFocused: false })}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="4" sm="6">
              <Button className="btn-1" color="primary" outline type="button">
                      Search
                    </Button>
                </Col>
                </Row>
                </Container>
          </section>
          <section className="section section-components">
            <Container>
            
            <Row className="py-3 align-items-center">
            <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              Circle Image
            </small>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow"
              src={require("assets/img/theme/team-2-800x800.jpg")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col sm="9">
            <p className="lead">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          </Col>
        </Row>
              
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Users;
