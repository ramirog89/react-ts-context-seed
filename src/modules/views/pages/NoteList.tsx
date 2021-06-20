import { useCallback, memo, useEffect, useState } from 'react';
import { useTodo } from '../../context/todo';

const NoteList = () => {
  const { state, addTodo, removeTodo, fetchTodoList } = useTodo();
  const [isLoading, setLoading] = useState(true);

  const addTodoHandler = useCallback(() => {
    addTodo({
      title: 'some random title',
      description: `some random description ${state.todoList.length + 1}`,
      status: true
    });
  }, [state.todoList, addTodo]);

  const removeTodoHandler = useCallback((id: number) => {
    removeTodo(id);
  }, [removeTodo]);


  useEffect(() => {
    (async function() {
      await fetchTodoList();
      setLoading(false);
    })();
  }, []); // eslint-disable-line

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <button data-testid="add-btn" onClick={addTodoHandler}>Add todo</button>
      {state.todoList.map((todo) => (
        <div data-testid="todo-item" key={todo.id}>
          {todo.description} <button data-testid="delete-btn" onClick={() => removeTodoHandler(todo.id as any)}>X</button>
        </div>
      ))}
    </>
  );
}

export default memo(NoteList);

