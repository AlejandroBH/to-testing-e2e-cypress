import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

// Contenedor de la tarea individual
const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #fafafa;
  }
`;

// Texto de la tarea
const TaskText = styled.span`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
  color: ${props => (props.$completed ? '#aaa' : '#333')};
  text-decoration: ${props => (props.$completed ? 'line-through' : 'none')};
  cursor: pointer;
  transition: color 0.3s;
`;

// Checkbox personalizado (visual)
const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${props => (props.$completed ? '#6c5ce7' : '#ddd')};
  background-color: ${props => (props.$completed ? '#6c5ce7' : 'transparent')};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  color: white;
  font-size: 12px;
`;

// Botón de eliminar
const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff7675;
  font-size: 16px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  padding: 8px;

  ${ItemContainer}:hover & {
    opacity: 1;
  }

  &:hover {
    color: #d63031;
  }
`;

// Componente TodoItem
const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ItemContainer>
      <Checkbox
        $completed={todo.completed}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.completed && <FontAwesomeIcon icon={faCheck} />}
      </Checkbox>
      <TaskText
        $completed={todo.completed}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </TaskText>
      <DeleteButton
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
        title="Eliminar tarea"
      >
        <FontAwesomeIcon icon={faTrash} />
      </DeleteButton>
    </ItemContainer>
  );
};

export default TodoItem;
