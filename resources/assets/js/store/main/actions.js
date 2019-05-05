export default {
    addTodo({ commit }, payload) {
        commit('ADD_TODO', payload);
    },
    changeTodoStatus({ commit }, payload) {
        commit('CHANGE_STATUS', payload);
    },
    deleteTodoItem({ commit }, payload) {
        commit('DELETE_TODO', payload);
    },
    saveTodoItem({ commit }, payload) {
        commit('SAVE_TODO', payload);
    }
}
