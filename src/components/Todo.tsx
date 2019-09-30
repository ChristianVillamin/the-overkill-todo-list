import React from 'react';
import styled from 'styled-components';

interface Props {
  todo: Todo;
  handleTodoToggle: HandleTodoToggle;
}

export const Todo: React.FC<Props> = ({ todo, handleTodoToggle }) => {
  return (
    <Li>
      <LabelTodo isDone={todo.done}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => handleTodoToggle(todo)}
        />
        {todo.text}
      </LabelTodo>
    </Li>
  );
};

const Li = styled.li`
  list-style: none;
  margin-left: -25px;
`;

const LabelTodo = styled.label<{ isDone: boolean }>`
  text-decoration: ${prop => prop.isDone && 'line-through'};
`;
