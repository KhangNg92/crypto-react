import React, { Component } from 'react';

import './App.css';
import styled from 'styled-components'

const Logo = styled.div`
font-size: 1.5em;
`
const Button = styled.div`
`
// if we use 1fr it will divide the spacing of each components equally
// if we use auto 100px 100px it will push those 2 buttons to the right 
// and the logo will stay to the left
const Wrapper = styled.div`
display: grid;
grid-template-columns:  auto 100px 100px;
padding: 40px
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Logo>
        CryptoDash
        </Logo>
        {/* <div>
          </div> */}
        <Button>
        Dashboard
          </Button>
        <Button>
        Settings
          </Button>
          </Wrapper>
    );
  }
}

export default App;
