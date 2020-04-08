import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

function App() {
  return (
    <>
      <Greeting>Hello World</Greeting>
    </>
  );
}

const Greeting = styled.div`
  font-size: 80pt;
`;

ReactDOM.render(<App />, document.getElementById("root"));
