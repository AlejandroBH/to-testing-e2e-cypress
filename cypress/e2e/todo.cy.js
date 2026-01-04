describe('Todo List App', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('debería permitir al usuario agregar una nueva tarea', () => {
        const newTask = 'Comprar leche';
        cy.get('input[placeholder="Agregar nueva tarea..."]').type(newTask);
        cy.contains('button', 'Agregar').click();
        cy.contains(newTask).should('be.visible');
    });

    it('debería permitir al usuario marcar una tarea como completada', () => {
        const newTask = 'Tarea a completar';
        cy.get('input[placeholder="Agregar nueva tarea..."]').type(newTask);
        cy.contains('button', 'Agregar').click();

        // Marcar como completada haciendo click en el texto
        cy.contains(newTask).click();

        // Verificamos cambio de estilo
        cy.contains(newTask).should('have.css', 'text-decoration').and('include', 'line-through');
    });

    it('debería permitir al usuario filtrar tareas por estado', () => {
        const activeTask = 'Tarea Activa';
        const completedTask = 'Tarea Completada';

        cy.get('input[placeholder="Agregar nueva tarea..."]').type(activeTask);
        cy.contains('button', 'Agregar').click();

        cy.get('input[placeholder="Agregar nueva tarea..."]').type(completedTask);
        cy.contains('button', 'Agregar').click();
        cy.contains(completedTask).click(); // Completarla

        // Filtrar Completadas
        cy.contains('button', 'Completadas').click();
        cy.contains(completedTask).should('be.visible');
        cy.contains(activeTask).should('not.exist');

        // Filtrar Activas
        cy.contains('button', 'Activas').click();
        cy.contains(activeTask).should('be.visible');
        cy.contains(completedTask).should('not.exist');

        // Filtrar Todas
        cy.contains('button', 'Todas').click();
        cy.contains(activeTask).should('be.visible');
        cy.contains(completedTask).should('be.visible');
    });

    it('debería permitir al usuario eliminar una tarea', () => {
        const taskToDelete = 'Tarea a eliminar';
        cy.get('input[placeholder="Agregar nueva tarea..."]').type(taskToDelete);
        cy.contains('button', 'Agregar').click();

        // Buscar botón de eliminar por título y forzar click por opacidad 0
        cy.get('button[title="Eliminar tarea"]').click({ force: true });

        cy.contains(taskToDelete).should('not.exist');
    });
});
