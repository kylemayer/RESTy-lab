import React, { Component } from 'react';
import Sidebar from '../components/displays/Sidebar';
import Body from '../components/displays/Body';
import Controls from '../components/controls/Controls';

export default class Container extends Component {
  state = {};






  render() {
    return (
      <>
        <h1> Testing Testing</h1>
        <Sidebar />
        <Controls />
        <Body />

      </>
    );
  }
}
