import { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onAddTodo(workingTodoTitle);
    setWorkingTodoTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoTitle">Todo</label>
      <input
        id="todoTitle"
        value={workingTodoTitle}
        onChange={(e) => setWorkingTodoTitle(e.target.value)}
      />
      <button disabled={workingTodoTitle === ''}>Add Todo</button>
    </form>
  );
}

export default TodoForm;
