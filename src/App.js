import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles";
import styled from "@emotion/styled";
import Home from "./pages/home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { frwc64 } from "./util/frwc64.js";


const App = () => {
  let wiz = frwc64.generateWizard(6761);
  console.log(wiz);
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  padding-border: 5em;
`;

export default App;
