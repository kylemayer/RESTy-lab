import React, { Component } from 'react';
import Sidebar from '../components/Displays/Sidebar';
import Body from '../components/Displays/Body';
import Controls from '../components/Controls/Controls';

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
