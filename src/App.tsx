import React, { Component } from 'react';
import Button from 'antd/lib/button';
import { NativeButtonProps } from 'antd/lib/button/button';
import styled from 'styled-components';
import './App.css';

const StyledButton = styled<NativeButtonProps>(props => <Button {...props} />)`
  color: white;
  background-color: green;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledButton>Button</StyledButton>
      </div>
    );
  }
}

export default App;
