import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  display: flex;
  padding: 30px 0;
  z-index: 7;
  border-right: 10px solid ${({ theme }) => theme.colors.darkPink};
`;

const Logo = styled.div`
  cursor: default;
  width: 8vh;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  h1 {
    text-align: right;
    margin-right: 24px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 1200px) {
    width: 10.5vh;
    h1 {
      font-size: ${({ theme }) => theme.fontSize.l};
      margin-right: 28px;
    }
  }
`;

const StyledLink = styled(NavLink)`
  :hover {
    color: ${({ theme }) => theme.colors.gold};
  }
  cursor: pointer;
  text-decoration: none;
  margin-left: 2vh;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  &.active {
    color: ${({ theme }) => theme.colors.darkGold};
  }

  @media (min-width: 1000px) {
    margin-left: 28vh;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const LinksSection = styled.div`
  margin: 15px auto;
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
    <LinksSection>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/enquiry">Enquiry</StyledLink>
      <StyledLink to="/offer">Offer</StyledLink>
    </LinksSection>
  </Wrapper>
);

export default Navigation;
