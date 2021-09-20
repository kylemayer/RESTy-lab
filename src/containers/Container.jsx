import React, { Component } from 'react';
import Sidebar from '../components/displays/Sidebar';
import Body from '../components/displays/Body';
import Controls from '../components/controls/Controls';
import fetchReq from '../services/fetchReq';
export default class Container extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    response: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { url, method, body } = this.state;

    fetchReq(url, method, body).then((response =>
      this.setState({ response }))
    );
  };

  render() {
    const { url, method, body, response } = this.state;

    return (
      <>
        <h1> Testing Testing</h1>
        <Controls
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          url={url}
          method={method}
          body={body}
        />
        <Body response={response} />
        <Sidebar />

      </>
    );
  }
}
