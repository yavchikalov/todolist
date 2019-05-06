<template>
    <div :class='["todo-item", {"todo-item--success": currentItem.status}]'>
        <div
            :class='["todo-item__status", {"todo-item__status--success": currentItem.status}]'
            @click='changeStatus'
        ></div>
        <div class="todo-item__name">
            <span v-if='!edit'>{{ currentItem.name }}</span>
            <input ref='inputName' class="input item-work__input-edit" type="text" :value='currentItem.name' @keyup.enter='saveItem' v-else>
        </div>
        <div class="todo-item__controls" v-if='!edit'>
            <div class="todo-item__icon todo-item__icon--edit" @click='editTodoItem'></div>
            <div class="todo-item__icon todo-item__icon--delete" @click='deleteTodoItem(idItem)'></div>
        </div>
        <div class="todo-item__controls todo-item__controls--visible" v-else>
            <div class="todo-item__icon todo-item__icon--success" @click='saveItem'></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todo-item',
        props: {
            idItem: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                edit: false
            }
        },
        computed: {
            currentItem() {
                return this.getTodoItem(this.idItem);
            },
            ...mapGetters('main', ['getTodoItem'])
        },
        methods: {
            changeStatus() {
                this.changeTodoStatus(this.idItem);
            },
            editTodoItem() {
                this.edit = true;
            },
            saveItem() {
                const name = this.$refs.inputName.value;
                this.saveTodoItem({ id: this.idItem, name });
                this.edit = false;
            },
            ...mapActions('main', ['changeTodoStatus', 'deleteTodoItem', 'saveTodoItem'])
        }
    }
</script>

<style lang="scss" scoped>
@import '~scss/variables';

.todo-item {
    background: #fff;
    padding: 12px 15px;
    display: flex;
    align-items: center;
    &:hover {
        .todo-item__controls {
            visibility: visible;
        }
    }
    &--success {
        opacity: .3;
        &:hover {
            opacity: 1;
        }
    }
    &__status {
        width: 30px;
        height: 30px;
        border: 2px solid #636363;
        margin-right: 10px;
        cursor: pointer;
        flex-shrink: 0;
        &:hover {
            border-color: $green;
        }
        &--success {
            background-image: url('~images/icons/success.svg');
            border-color: $green;
        }
    }
    &__name {
        flex-basis: 100%;
    }
    &__controls {
        display: flex;
        visibility: hidden;
        &--visible {
            visibility: visible;
        }
    }
    &__icon {
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        cursor: pointer;
        &--edit {
            background-image: url('~images/icons/edit.svg');
            margin: 0 20px;
        }
        &--delete {
            background-image: url('~images/icons/delete.svg');
        }
        &--success {
            background-image: url('~images/icons/success.svg');
            margin-left: 20px;
        }
    }
}
</style>
