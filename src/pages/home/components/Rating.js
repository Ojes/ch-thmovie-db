import styled from 'styled-components';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';

const StarButton = styled(Button)`
  background: transparent;
  color: ${({ selected }) => (selected ? '#fece00' : '#757575')};
  margin: 0;
  padding: 3px;
  width: fit-content;
`;

const Rating = ({ count, selected, onChange }) => {
  return new Array(count).fill('').map((_, index) => {
    const value = (index + 1) * 2;
    return (
      <StarButton
        key={`rating-button-${value}`}
        title={`Filter by ${value} rating`}
        selected={selected >= value}
        onClick={() => onChange(value)}>
        <Icon ico="star" />
      </StarButton>
    );
  });
};

export default Rating;
