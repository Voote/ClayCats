import { LinksSection, Logo, StyledLink, Wrapper } from './Navigation.styles';

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
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/enquiry">Enquiry</StyledLink>
      <StyledLink to="/offer">Offer</StyledLink>
    </LinksSection>
  </Wrapper>
);

export default Navigation;
