export default {
    SET_TODO_LIST(state, payload) {
        state.todoList = payload;
    },
    ADD_TODO(state, payload) {
        state.todoList.push(payload);
    },
    CHANGE_STATUS(state, id) {
        const { todoList } = state;
        const todoItem = todoList.find(todo => todo.id === id);
        if (todoItem) todoItem.status = !todoItem.status;
    },
    DELETE_TODO(state, id) {
        const { todoList } = state;
        const todoItemIndex = todoList.findIndex(todo => todo.id === id);
        if (todoItemIndex !== undefined) todoList.splice(todoItemIndex, 1);
    },
    SAVE_TODO(state, { id, name }) {
        const { todoList } = state;
        const todoItem = todoList.find(todo => todo.id === id);
        if (todoItem) todoItem.name = name;
    }
}
