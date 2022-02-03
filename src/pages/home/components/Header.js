import styled from 'styled-components';
import headerBg from '../../../assets/headerBg.jpg';

const HeaderWrapper = styled.header`
  align-items: center;
  background-image: url(${headerBg});
  background-position: center;
  background-size: cover;
  flex-direction: column;
  display: flex;
  justify-content: center;
  height: 350px;
  width: 100%;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0;
`;

const Description = styled.p`
  color: white;
  margin: 0;
`;

const Hero = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

const Header = ({ children }) => {
  return (
    <HeaderWrapper>
      <Hero>
        <Title>Your favourite movies</Title>
        <Description>Figure out what happend. Then find out why.</Description>
      </Hero>
      <div>{children}</div>
    </HeaderWrapper>
  );
};

export default Header;
