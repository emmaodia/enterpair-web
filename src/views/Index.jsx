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

// reactstrap components
import { Container } from "reactstrap";

// core components
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

// index page sections
import Hero from "./IndexSections/Hero.jsx";
import Tabs from "./IndexSections/Tabs.jsx";
import Carousel from "./IndexSections/Carousel.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <Hero />          
          <section className="section section-components">
            <Container>
              <Tabs />
            </Container>
          </section>
          <Carousel />
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
