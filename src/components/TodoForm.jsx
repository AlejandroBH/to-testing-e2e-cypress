import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Contenedor del formulario
const FormContainer = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

// Campo de entrada de texto
const Input = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #6c5ce7;
  }
`;

// Botón para enviar
const Button = styled.button`
  padding: 10px 20px;
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a4ad1;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Componente TodoForm
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Agregar nueva tarea..."
      />
      <Button type="submit" disabled={!value.trim()}>
        Agregar
      </Button>
    </FormContainer>
  );
};

export default TodoForm;
