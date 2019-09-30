import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  todoAdd: HandleTodoAdd;
}

export const TodoAddForm: React.FC<Props> = ({ todoAdd }) => {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    todoAdd(input);
    setInput('');
  };

  return (
    <Form>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </Form>
  );
};

const Form = styled.form`
  color: gainsboro;

  input {
    border: none;
    width: 200px;
  }

  button {
    border: none;
    width: 100px;
  }
`;
