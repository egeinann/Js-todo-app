import React from 'react';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

// Ana sayfa bileşeni
export default function Home({ todos, addTodo, deleteTodo, editTodo, updateTodo, todoToEdit }) {
  return (
    <div>
      <Header title="Todo Uygulaması" />
      <TodoForm addTodo={addTodo} updateTodo={updateTodo} todoToEdit={todoToEdit} />
      <ul className="list-group">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}
      </ul>
    </div>
  );
}