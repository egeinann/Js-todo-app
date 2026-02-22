import React, { useState, useEffect } from 'react';

// Todo ekleme ve güncelleme formu
export default function TodoForm({ addTodo, updateTodo, todoToEdit }) {
  const [text, setText] = useState('');

  // Düzenlenecek todo varsa inputa yerleştir
  useEffect(() => {
    if (todoToEdit) setText(todoToEdit.text);
  }, [todoToEdit]);

  // Form submit işlemi
  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    if (todoToEdit) {
      updateTodo(todoToEdit.id, text); // Mevcut todo güncelle
    } else {
      addTodo(text); // Yeni todo ekle
    }
    setText(''); // Inputu temizle
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 d-flex">
      <input
        type="text"
        className="form-control me-2"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Yapılacak ekleyin..."
      />
      <button type="submit" className="btn btn-primary">
        {todoToEdit ? 'Güncelle' : 'Ekle'}
      </button>
    </form>
  );
}