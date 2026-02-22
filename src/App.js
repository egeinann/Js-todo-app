import React, { useState } from 'react';
import Home from './pages/Home';

// Uygulama ana bileşeni
export default function App() {
  const [todos, setTodos] = useState([]);       // Todo listesi state'i
  const [todoToEdit, setTodoToEdit] = useState(null); // Düzenlenecek todo

  // Todo ekleme fonksiyonu
  const addTodo = text => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  // Todo silme fonksiyonu
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Todo düzenleme seçimi
  const editTodo = todo => {
    setTodoToEdit(todo);
  };

  // Todo güncelleme fonksiyonu
  const updateTodo = (id, text) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text } : todo)));
    setTodoToEdit(null);
  };

  return (
    <div className="container py-5">
      {/* Şık Üst Header */}
      <div className="p-5 mb-4 bg-primary text-white rounded-3 shadow text-center" 
           style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}>
        <h1 className="display-5 fw-bold">🚀 React CRUD Uygulaması</h1>
        <p className="fs-4">State yönetimi ve Bootstrap ile Modern Web Geliştirme</p>
      </div>

      {/* İstatistik Kartları */}
      <div className="row mb-4 text-center">
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h2 className="text-primary">{todos.length}</h2>
            <p className="text-muted">Toplam Kayıt</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h2 className="text-success">{todos.length > 0 ? "Aktif" : "Bekliyor"}</h2>
            <p className="text-muted">Durum</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h2 className="text-warning">v1.0</h2>
            <p className="text-muted">Versiyon</p>
          </div>
        </div>
      </div>

      {/* Home bileşeni */}
      <Home
        todos={todos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        updateTodo={updateTodo}
        todoToEdit={todoToEdit}
      />
    </div>
  );
}