import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import StartingPage from "./components/StartingPage";

const Header = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Label = styled.label`
  margin: 5px;
`;

const Input = styled.input`
  height: 5vh;
  width: 30%;
  margin: 5px;
  border-radius: 10px;
  border: solid 2px purple;
`;
const Main = styled.main`
  background-color: #282c34;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  const [idFilter, setIdFilter] = useState("");
  function handleInp(e) {
    setIdFilter(e.target.value);
  }
  function removeFilter() {
    setIdFilter("");
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header>
          <Label htmlFor="filterById">Filter by Id:</Label>
          <Input type="number" id="filterById" onChange={handleInp} />
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<StartingPage />} />
            <Route
              path="/page/:page"
              element={
                <ProductsList filter={idFilter} removeFilter={removeFilter} />
              }
            />
          </Routes>
        </Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
