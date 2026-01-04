import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

// Contenedor principal de la aplicación
const AppContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

// Título principal
const Title = styled.h1`
  text-align: center;
  color: #2d3436;
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: 700;
  
  span {
    color: #6c5ce7;
  }
`;

// Componente Principal App
function App() {
  // Estado para la lista de tareas, inicializado desde localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  // Estado para filtrado actual
  const [filter, setFilter] = useState('all');

  // Efecto para guardar en localStorage cuando cambian las tareas
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Agregar una nueva tarea
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  // Alternar estado completado de una tarea
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Eliminar una tarea
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filtrar tareas según el estado
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <AppContainer>
      <Title>
        <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: '15px', color: '#6c5ce7' }} />
        TODO <span>List</span>
      </Title>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

      <TodoFilter filter={filter} setFilter={setFilter} />
    </AppContainer>
  );
}

export default App;
