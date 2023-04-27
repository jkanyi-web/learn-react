/* eslint-disable react/prop-types */
/** @format */
import TodoItem from './TodoItem.jsx';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className='list'>
      {todos.length === 0 && 'No Todos!'}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
