import styled from 'styled-components';

const Button = styled.button`
  background: ${({ primary }) => (primary ? 'palevioletred' : 'white')};
  border: none;
  border-radius: 3px;
  color: ${({ primary }) => (primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  width: ${({ fullwidth }) => (fullwidth ? '100%' : 'auto')};
`;

export default Button;
