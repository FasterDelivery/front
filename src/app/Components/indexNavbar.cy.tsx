import React from "react";
import { Navbar } from "./index";

describe("<Navbar />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Navbar />);
  });
});
