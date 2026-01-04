import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

// Contenedor de la lista
const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

// Mensaje cuando no hay tareas
const EmptyMessage = styled.p`
  text-align: center;
  color: #999;
  padding: 20px;
  font-style: italic;
`;

// Componente TodoList
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    if (todos.length === 0) {
        return <EmptyMessage>No hay tareas para mostrar.</EmptyMessage>;
    }

    return (
        <ListContainer>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ListContainer>
    );
};

export default TodoList;
