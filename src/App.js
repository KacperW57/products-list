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
  return (
    <BrowserRouter>
      <div className="App">
        <Header>
          <Label htmlFor="filterById">Filter by Id:</Label>
          <Input type="number" id="filterById" />
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<StartingPage />} />
            <Route path="/page/:page" element={<ProductsList />} />
          </Routes>
        </Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
