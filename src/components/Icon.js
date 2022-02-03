import styled from 'styled-components';

const IconWrapper = styled.span`
  &:not(empty) {
    margin-left: 4px;
  }
`;

const Icon = ({ ico, type = 'fa', children }) => (
  <>
    <i className={`${type}-solid fa-${ico}`}></i>
    <IconWrapper>{children}</IconWrapper>
  </>
);

export default Icon;
