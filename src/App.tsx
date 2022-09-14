import { Route, Routes } from 'react-router-dom';
import MainTemplate from './MainTemplate';
import Home from './molecules/Home/Home';
import Offer from './molecules/Offer/Offer';
import Enquiry from './molecules/Enquiry/Enquiry';
import { AppWrapper } from './App.styles';

const App = () => (
  <MainTemplate>
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </AppWrapper>
  </MainTemplate>
);

export default App;
