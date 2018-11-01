import React, { Component } from 'react';

import './App.css';
import styled ,{css}from 'styled-components'

const Logo = styled.div`
font-size: 1.5em;
`

// if that page is active then render the css
const Button = styled.div`
cursor:pointer
${props => props.active && css`
text-shadow: 0px 0px 60px #03ff03`
}
`
// if we use 1fr it will divide the spacing of each components equally
// if we use auto 100px 100px it will push those 2 buttons to the right 
// and the logo will stay to the left
const Bar = styled.div`
display: grid;
grid-template-columns:  auto 100px 100px;
margin-bottom: 40px
`
const Content = styled.div`

`

const Wrapper = styled.div`
padding: 40px

`
class App extends Component {


  state = {
    page: 'dashboard'
  }

  displayDashboard = () => this.state.page === 'dashboard';
  displaySetting = () => this.state.page === 'setting';
  render() {
    return (
      <Wrapper>
      <Bar>
        <Logo>
        CryptoDash
        </Logo>
        {/* <div>
          </div> */}
        <Button onClick = {() => {this.setState({page: 'dashboard'})}} active = {this.displayDashboard()}>
        Dashboard
          </Button>
        <Button onClick = {() => {this.setState({page: 'setting'})}}active = {this.displaySetting()}>
        Settings
          </Button>
          </Bar>
          <Content>
            Hello I'm {this.state.page}
          </Content>
          </Wrapper>
    );
  }
}

export default App;
