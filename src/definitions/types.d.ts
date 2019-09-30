type Todo = {
  text: string;
  done: boolean;
};

type HandleTodoToggle = (clickedTodo: Todo) => void;
type HandleTodoAdd = (newTodo: string) => void;
