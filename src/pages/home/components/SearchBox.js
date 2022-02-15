import { useUpdateAtom } from 'jotai/utils';
import { useState } from 'react';
import styled from 'styled-components';
import { requestParamsAtom } from '../../../atoms/MovieResultsAtom';
import Button from '../../../components/Button';

const Search = styled.input`
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 10px 16px;
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: stretch;
`;

const SubmitWrapper = styled(Button)`
  background-color: #38b8d9;
  border-radius: 0 5px 5px 0;
  color: white;
  margin: 0;
  &:disabled {
    background-color: gray;
  }
`;

const SearchBox = () => {
  const setNewQuery = useUpdateAtom(requestParamsAtom);
  const [inputValue, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewQuery(inputValue);
  };

  // TODO: dispatch event after Input
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Search type='text' name='search' value={inputValue} onInput={(evt) => setInput(evt.target.value)} placeholder='Search movie' />
      <SubmitWrapper type='submit' disabled={!inputValue}>
        Search
      </SubmitWrapper>
    </FormWrapper>
  );
};

export default SearchBox;
