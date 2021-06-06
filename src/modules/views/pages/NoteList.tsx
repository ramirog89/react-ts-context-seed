import { useEffect } from 'react';
import { useGeneral } from '../../context/general';
import { useTodo } from '../../context/todo';

const NoteList = () => {
	const { state: generalState } = useGeneral();
  const { state, addTodo, removeTodo, fetchTodoList } = useTodo();

	const addTodoHandler = () => {
		addTodo({
			id: state.todoList.length + 1,
			title: 'some random title',
			description: `some random description ${state.todoList.length + 1}`,
			status: true
		});
	}

	const removeTodoHandler = (id: number) => {
		removeTodo(id);
	}

	useEffect(() => {
		fetchTodoList();
	}, []); // eslint-disable-line

	if (generalState.loading?.['fetchTodoList']?.isLoading) {
		return <>Loading...</>;
	}

	return (
		<>
			<button data-testid="add-btn" onClick={addTodoHandler}>Add todo</button>
			{state.todoList.map((todo) => (
				<div data-testid="todo-item" key={todo.id}>
					{todo.description} <button data-testid="delete-btn" onClick={() => removeTodoHandler(todo.id)}>X</button>
				</div>
			))}
		</>
  );
}

export default NoteList;

