import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const CustomElement = styled.div`
color: green;
font-size: 30px;
`
const BlueElement = styled.div`
color: blue;
`


class App extends Component {
  render() {
    return (
        <div>
          <CustomElement>
        Hello
        </CustomElement>
        <BlueElement>
          Hello Blue
          </BlueElement>
          </div>
    );
  }
}

export default App;
