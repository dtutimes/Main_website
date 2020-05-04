import React, { Component } from "react";
import { FormGroup, Input, Button, Form } from "reactstrap";
import { api } from "api";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
export default class BlogSubsciber extends Component {
  state = {
    email: "",
    message: "",
    error: "",
    disable: true,
    err: "",
  };

  handleChange = (event) => {
    let x = validEmailRegex.test(event.target.value) ? false : true;
    this.setState({ email: event.target.value, err: x, disable: x });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    api
      .post("/subscriber", this.state)
      .then((res) => {
        if (res.status === 201) {
          this.setState({ message: "Subscribed, woohoo!!" });
        }
      })
      .catch((err) => {
        this.setState({ error: "Already in our mailing list." });
      });

    setTimeout(() => {
      this.clearMessage();
    }, 5000);
  };

  clearMessage = () => this.setState({ message: "", error: "" });

  render() {
    return (
      <div>
        <h6>Subscribe to Our NewsLetter</h6>
        <p className="mb-3">
          <strong>
            If you liked what you saw, subscribe for more! We deliver out new
            Editions every quarter, from interviews to creative content, there
            is something in store for everyone!
          </strong>
        </p>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className={this.state.err === true ? "has-danger" : "has-success"}>
            <Input
              defaultValue=""
              className={this.state.err === true ? "form-control-danger" : "form-control-success"}
              onChange={this.handleChange}
              placeholder="Enter your email"
              type="email"
            />
          </FormGroup>
          <div className="form-control-feedback text-primary mb-2">
            {this.state.message}
          </div>
          <div className="form-control-feedback text-danger mb-2">
            {this.state.error}
          </div>
          <Button
            className="btn-rotate btn-primary mb-2"
            style={{ width: "100%", backgroundColor: "#E85D75", borderColor: "#E85D75" }}
            disabled={this.state.disable === true ? true : false}
          >
            <i className="fa fa-unlock-alt" />
            woohoo!!
          </Button>
        </Form>
        {/* <p>
          Also stay updated on DTU Technology Review initiatives and events?
        </p> */}
      </div>
    );
  }
}
