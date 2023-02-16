import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

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

  &:hover {
    background-color: green;
  }
`;

const Logo = styled.img`
  height: 1em;
  width: 3em;
`;

const Visit = styled.a`
  color: cyan;
`;

const Thisdiv = styled.div<any>`
  width: ${({ something }) => something.max_width};
  height: 10vh;
  border: 2px solid cyan;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
`;

function App() {
  const theme = {
    divOneMax_Width: "300px",
    divOneWidth: "30%",
  };

  const something = {
    max_width: "11vw",
  };

  return (
    <>
      <Root theme={theme}>
        <div className="div1"> Div1</div>
        <div className="div2"> Div2</div>
      </Root>

      <Thisdiv something={something}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugit
        reprehenderit minus aliquam et ullam minima aspernatur! Distinctio hic,
        nemo consectetur, fuga quod quae assumenda asperiores nulla facilis
        facere, consequatur animi commodi aperiam at sit ab blanditiis delectus
        pariatur beatae ad ut. Veniam velit amet suscipit nostrum sequi
        recusandae ipsa? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Accusantium reiciendis voluptates itaque esse, exercitationem
        tempore illo vitae odio! Voluptas neque eos cum consequuntur voluptate
        fugit quasi architecto a eligendi quo.
      </Thisdiv>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <Logo src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <Visit
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Title>Learn React</Title>
    //       <Title2>Learn React</Title2>
    //       <Title3>Learn React</Title3>
    //     </Visit>
    //   </header>
    // </div>
  );
}

export default App;

// divOne: "300px",
//  divTwo: "30%",

const Root = styled.div`
  width: 100%;
  height: 500px;
  .div1 {
    width: ${({ theme }) => theme.divOneWidth};
    max-width: ${({ theme }) => theme.divOneMax_Width};
    height: 100%;
    background-color: grey;
    display: inline-block;
  }

  .div2 {
    display: inline-block;
    width: calc(100% - ${({ theme }) => theme.divOneMax_Width});
    /* min-width: 100px ; */
    min-width: calc(100% - ${({ theme }) => theme.divOneWidth});
    /* max-width: calc(100% - ${({ theme }) => theme.divOneMax_Width}); */
    height: 100%;
    background-color: #4e4444;
  }
`;
