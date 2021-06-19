import { useCallback, useEffect, useState, memo } from 'react';
import { useTodo } from '../../context/todo';

const NoteList = () => {
  const { state, addTodo, removeTodo, fetchTodoList } = useTodo();
  const [loading, setLoading] = useState<boolean>(false);

  const addTodoHandler = useCallback(() => {
    addTodo({
      title: 'some random title',
      description: `some random description ${state.todoList.length + 1}`,
      status: true
    });
  }, [state.todoList, addTodo]);

  const removeTodoHandler = useCallback((id: string) => {
    removeTodo(id);
  }, [removeTodo]);

  useEffect(() => {
    setLoading(true);
    fetchTodoList();
    setLoading(false);
  }, [setLoading, fetchTodoList]); // eslint-disable-line

  if (loading) {
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

