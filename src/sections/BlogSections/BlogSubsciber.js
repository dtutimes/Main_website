import React, { Component } from "react";
import { FormGroup, Input, Button, Form } from "reactstrap";
import { api } from "api";

export default class BlogSubsciber extends Component {
  state = {
    email: "",
    message: "",
    error: ""
  };

  handleChange = event => this.setState({ email: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    api.post("/subscriber", this.state).then(res => {
      if (res.status === 201) {
        this.setState({ message: "woohoo!!" });
        } 
    }).catch(err => {
        this.setState({ error: "Already in our mailing list." });
    })

    setTimeout(() => {
        this.clearMessage()
    }, 5000);
  };

  clearMessage = () => this.setState({message: "", error: ""})

  render() {
    return (
      <div>
        <h6>Subscribe to Our NewsLetter</h6>
        <p className="mb-3">Your daily dose of write some tag line here. </p>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              defaultValue=""
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
            style={{ width: "100%" }}
            color="default"
          >
            <i className="fa fa-unlock-alt" />
            Wohooo
          </Button>
        </Form>
        <p>
          Also stay updated on DTU Technology Review initiatives and events?
        </p>
      </div>
    );
  }
}
