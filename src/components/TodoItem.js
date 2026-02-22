import React from 'react';

// Todo liste öğesi bileşeni
export default function TodoItem({ todo, deleteTodo, editTodo }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.text}
      <div>
        {/* Düzenle butonu */}
        <button className="btn btn-sm btn-warning me-2" onClick={() => editTodo(todo)}>
          Düzenle
        </button>
        {/* Sil butonu */}
        <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo.id)}>
          Sil
        </button>
      </div>
    </li>
  );
}