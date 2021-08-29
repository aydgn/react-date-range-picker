import styled from "styled-components";
import Header from "./components/Header";
import Input from "./components/Input";
import Calendar from "./components/Calendar";

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Date>
        <Input text="Check-in" />
        <Input text="Check-out" />
      </Date>
      <Calendar />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export default App;
