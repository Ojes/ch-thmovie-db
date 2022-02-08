import { useUpdateAtom } from 'jotai/utils';
import { useState } from 'react';
import styled from 'styled-components';
import { requestParamsAtom } from '../../../atoms/MovieResultsAtom';

const Search = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px 16px;
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
    <form onSubmit={handleSubmit}>
      <Search type="text" name="search" value={inputValue} onInput={(evt) => setInput(evt.target.value)} placeholder="Search movie" />
    </form>
  );
};

export default SearchBox;
