import React from 'react';
import styled from 'styled-components';

// Contenedor de filtros
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

// Botón de filtro individual
const FilterButton = styled.button`
  padding: 8px 12px;
  background-color: ${props => (props.$active ? '#6c5ce7' : 'transparent')};
  color: ${props => (props.$active ? 'white' : '#6c5ce7')};
  border: 1px solid #6c5ce7;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => (props.$active ? '#5a4ad1' : 'rgba(108, 92, 231, 0.1)')};
  }
`;

// Componente TodoFilter
const TodoFilter = ({ filter, setFilter }) => {
    return (
        <FilterContainer>
            <FilterButton
                $active={filter === 'all'}
                onClick={() => setFilter('all')}
            >
                Todas
            </FilterButton>
            <FilterButton
                $active={filter === 'active'}
                onClick={() => setFilter('active')}
            >
                Activas
            </FilterButton>
            <FilterButton
                $active={filter === 'completed'}
                onClick={() => setFilter('completed')}
            >
                Completadas
            </FilterButton>
        </FilterContainer>
    );
};

export default TodoFilter;
