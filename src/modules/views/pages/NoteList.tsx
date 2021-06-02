import { useTodo } from '../../context/todo';

const NoteList = () => {
  const { state, addTodo, removeTodo } = useTodo();

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

	return (
		<>
			<button onClick={addTodoHandler}>Add todo</button>
			{state.todoList.map((todo) => (
				<div key={todo.id}>
					{todo.description} <button onClick={() => removeTodoHandler(todo.id)}>X</button>
				</div>
			))}
		</>
  );
}

export default NoteList;
