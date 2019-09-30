import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoList } from '../components/TodoList';
import { TodoAddForm } from '../components/TodoAddForm';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([
    { text: `Just do it.`, done: false },
  ]);

  const handleTodoToggle: HandleTodoToggle = clickedTodo => {
    setTodos(
      todos.map(todo => {
        clickedTodo === todo && (clickedTodo.done = !clickedTodo.done);
        return todo;
      })
    );
  };

  const handleTodoAdd: HandleTodoAdd = newTodo => {
    newTodo.length && setTodos([...todos, { text: newTodo, done: false }]);
  };

  return (
    <Container>
      <Title>The Whatever Todo List</Title>
      <TodoDiv>
        <TodoList todos={todos} handleTodoToggle={handleTodoToggle} />
        <TodoAddForm todoAdd={handleTodoAdd} />
      </TodoDiv>
    </Container>
  );
};

const Container = styled.section`
  padding: 4em;
  background: papayawhip;
  width: 750px;
  margin: auto;
  border: 2px solid pink;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`;

const TodoDiv = styled.div`
  margin: auto;
  border: 2px pink solid;
  width: 300px;
  padding: 0;

  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
`;

export default App;
