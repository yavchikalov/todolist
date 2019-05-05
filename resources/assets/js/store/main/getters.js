export default {
    getTodoItem: state => id => {
        const { todoList } = state;
        return todoList.find(todo => todo.id === id);
    }
}
