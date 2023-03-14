<template>
    <div class="productModalContainer">
        <Icon icon="ic:round-close" width="24"  class="closeIcon" @click="emit('closeModal', false)"/>
        <h3 class="m-0">Add new Product</h3>
        <form @submit.prevent="onSubmit">

            <div class="search_box">
                <input type="text" placeholder="Product name">
                <input type="number" placeholder="Product price">

                <select>
                    <option :value="category.id" v-for="category, idy in categories" :key="idy">{{ category.name }}</option>
                </select>

            </div>

            <button type="submit" class="btn save">Save</button>
        </form>
    </div>
</template>

<script setup>
import store from "../../../store"
import {Icon} from'@iconify/vue'

const emit = defineEmits(['closeModal'])


const categories = store.state.categories

const onSubmit = () => {
    console.log('Submit')
}
</script>

<style lang="scss">
.productModalContainer {
    min-width: 420px;
    max-width: 620px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
    position: fixed;
    top: 24px;
    left: calc(100% - 800px);
    background: #fff;
    padding: 8px 12px;
    box-sizing: border-box;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    border-radius: 4px;
    z-index: 999;

    .closeIcon{
        position: absolute;
        top: 4px;
        right: 4px;
        cursor: pointer;
    }

    form {
        width: calc(100% - 24px);
        display: flex;
        flex-direction: column;
        row-gap: 8px;

        li.dropdown {
            width: 100%;
        }

        .search_box {
            display: flex;
            flex-direction: column;
            row-gap: 12px;

            input {
                width: 100%;
                background-image: none;
            }
        }
    }
}
</style>