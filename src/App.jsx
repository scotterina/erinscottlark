import './TodoList';
import './App.css';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <TodoList />
      <ul>
        todos.map((todo) = (<li key={todo.id}>{todo.title}</li>
        ))
        <TodoList />
      </ul>
    </div>
  );
}

export default App;
