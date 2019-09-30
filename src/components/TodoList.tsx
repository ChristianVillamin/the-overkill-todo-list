import React from 'react';
import { Todo } from './Todo';
import styled from 'styled-components';

interface Props {
  todos: Array<Todo>;
  handleTodoToggle: HandleTodoToggle;
}

export const TodoList: React.FC<Props> = ({ todos, handleTodoToggle }) => {
  const todoArr = todos.map((todo, index) => (
    <Todo
      key={`${todo.text}${index}`}
      todo={todo}
      handleTodoToggle={handleTodoToggle}
    />
  ));

  return <Ul>{todoArr}</Ul>;
};

const Ul = styled.ul``;
