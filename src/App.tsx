import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import MainTemplate from './MainTemplate';
import Home from './molecules/Home/Home';
import Offer from './molecules/Offer/Offer';
import Section from './molecules/Section/Section';

const Wrapper = styled.div`
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const App = () => (
  <MainTemplate>
    <Wrapper>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/section" element={<Section />} />
      </Routes>
    </Wrapper>
  </MainTemplate>
);

export default App;
