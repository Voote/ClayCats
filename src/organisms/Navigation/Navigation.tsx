import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 10px solid #dda0dd;
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1/3;
  grid-column: 1/1;
`;

const Logo = styled.div`
  background-color: #808080;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 15px;
    color: #ffffff;
    text-align: right;
    margin-right: 20px;
  }
`;

const StyledLink = styled(NavLink)`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: #808080;
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;
`;

const Navigation = () => (
  <Wrapper>
    <Logo>
      <h1>
        Clay
        <br />
        Cats
      </h1>
    </Logo>
    <StyledLink to="/home">Home</StyledLink>
    <StyledLink to="/section">Section</StyledLink>
    <StyledLink to="/offer">Offer</StyledLink>
  </Wrapper>
);

export default Navigation;
