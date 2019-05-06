<template>
    <div class="todo-list">
        <div class="todo-list__header">
            Список дел
        </div>
        <div class="todo-list__add-form">
            <input type="text" class="input input--height--full todo-list__input-add" v-model='input' @keyup.enter='addTodoItem'>
            <div class="todo-list__button-add btn btn-success" @click='addTodoItem'>Добавить</div>
        </div>
        <div class="todo-list__hide-success-todo">
            <div class="checkbox">
                <input id="hide-success-todo" type="checkbox" class="checkbox__input" v-model='hideSuccessTodo'>
                <label for="hide-success-todo" class="checkbox__label">Скрыть выполненные дела</label>
            </div>
        </div>
        <div class="todo-list__loader" v-if='loader'>Загрузка...</div>
        <div v-else>
            <div class="todo-list__items" v-if='todoListItems.length'>
                <div class="todo-list__todo-item" v-for='({ id, name, status }, key) in todoListItems' :key='id'>
                    <todo-item
                        :idItem='id'
                    />
                </div>
            </div>
            <div class="todo-list__empty" v-else-if='todoList.length'>
                Все дела выполнены!
            </div>
            <div class="todo-list__empty" v-else>
                На сегодня нет никаких дел!
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todo-list',
        data() {
            return {
                input: '',
                hideSuccessTodo: false,
                loader: true
            }
        },
        async created() {
            await this.getTodoList();
            this.loader = false;
        },
        computed: {
            todoListExceptSuccess() {
                return this.todoList.filter(({ status }) => !status);
            },
            todoListItems() {
                return this.hideSuccessTodo ? this.todoListExceptSuccess : this.todoList;
            },
            ...mapState('main', ['todoList'])
        },
        methods: {
            addTodoItem() {
                if (this.input.trim()) {
                    this.addTodo({ name: this.input });
                    this.input = '';
                }
            },
            ...mapActions('main', ['addTodo', 'getTodoList'])
        }
    }
</script>

<style lang="scss" scoped>
.todo-list {
    width: 100%;
    max-width: 700px;
    background: #ccc;
    font-size: 18px;
    box-shadow: 0px 0px 10px 0px #ccc;
    border: 1px solid #ccc;
    &__header {
        background: #e3e3e3;
        padding: 10px 25px;
        font-size: 30px;
        color: #b0a8a8;
    }
    &__todo-item {
        margin: 10px 10px 20px 10px;
        &:last-child {
            margin: 10px 10px 10px 10px;
        }
    }
    &__items {
        padding: 10px 0;
    }
    &__add-form {
        padding: 10px 10px;
        display: flex;
        align-items: center;
        border-bottom: 2px solid #e3e3e3;
    }
    &__input-add {
        margin-right: 20px;
    }
    &__button-add {
        cursor: pointer;
    }
    &__empty {
        margin: 10px;
    }
    &__hide-success-todo {
        padding: 10px 10px;
        background: #e3e3e3;
    }
    &__loader {
        padding: 10px;
    }

}
</style>
