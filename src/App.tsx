import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: rgb(0, 0, 0, 0.7);
  `;

  const Title2 = styled(Title)`
    padding: 10px;
    background-color: grey;
  `;
  const Title3 = styled(Title2)`
    padding: 40px;
    background-color: grey;
    font-family: "papyrus";

    &:hover{
      background-color: green;
    }
  `;

  const Logo = styled.img`
    height: 1em;
    width: 3em;
  `;

  const Visit = styled.a`
    color: red;
  `;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Visit
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Title>Learn React</Title>
          <Title2>Learn React</Title2>
          <Title3>Learn React</Title3>
        </Visit>
      </header>
    </div>
  );
}

export default App;
