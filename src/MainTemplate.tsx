import styled from 'styled-components';
import Navigation from './organisms/Navigation/Navigation';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 90px 1fr;
  /* grid-template-columns: 150px 1fr 0.75fr; */
  background-color: lightgrey;
`;

const MainTemplate = ({ children }: any) => (
  <Wrapper>
    <Navigation />
    {children}
  </Wrapper>
);

export default MainTemplate;
