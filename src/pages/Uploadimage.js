import react from "react";
import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";

import Navbar from "../components/NavigationBar";

class Contact extends Component {
  state = { image: null };

  file = react.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    //upload ke Backend pakai axios / fetch
  };

  handleFileChange = (e) => {
    const file = this.file.current.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.setState({ image: reader.result });
      },
      false
    );
    if (file.type.includes("image/")) reader.readAsDataURL(file);
  };
  render() {
    const { image } = this.state;
    return (
      <Fragment>
        <Navbar />
        <Container className="p-4">
          {!!image && <img src={image} alt="Preview" />}
          <form onSubmit={this.handleSubmit}>
            <input type="file" name="photo" ref={this.file} onChange={this.handleFileChange} />
            <input type="submit" value="submit" />
          </form>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
