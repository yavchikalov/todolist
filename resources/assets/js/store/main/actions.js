export default {
    getTodoList({ commit }) {
        return axios.get('api/todolist')
                    .then(response => {
                        if (response.statusText === 'OK') commit('SET_TODO_LIST', response.data);
                        return response;
                    })
                    .catch(error => {
                        return error;
                    });
    },
    addTodo({ commit }, payload) {
        return axios.post('api/todolist/create', payload)
                    .then(response => {
                        const { status, message, todo } = response.data;
                        if (status === 'ok') {
                            commit('ADD_TODO', todo);
                        } else {
                            alert(message);
                        }
                        return response;
                    })
                    .catch(error => {
                        return error;
                    });
    },
    changeTodoStatus({ commit }, id) {
        return axios.patch(`api/todolist/update/${id}`, { status: true })
                    .then(response => {
                        const { status, message, todo } = response.data;
                        if (status === 'ok') {
                            commit('CHANGE_STATUS', id);
                        } else {
                            alert(message);
                        }
                        return response;
                    })
                    .catch(error => {
                        return error;
                    });
    },
    deleteTodoItem({ commit }, id) {
        return axios.delete(`api/todolist/delete/${id}`)
                    .then(response => {
                        const { status, message } = response.data;
                        if (status === 'ok') {
                            commit('DELETE_TODO', id);
                        } else {
                            alert(message);
                        }
                        return response;
                    })
                    .catch(error => {
                        return error;
                    });
    },
    saveTodoItem({ commit }, payload) {
        const { id } = payload;
        return axios.patch(`api/todolist/update/${id}`, payload)
                    .then(response => {
                        const { status, message, order } = response.data;
                        if (status === 'ok') {
                            commit('SAVE_TODO', payload);
                        } else {
                            alert(message);
                        }
                        return response;
                    })
                    .catch(error => {
                        return error;
                    });
    }
}
