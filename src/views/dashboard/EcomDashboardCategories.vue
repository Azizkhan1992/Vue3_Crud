<template>
    <div class="categoriesContainer">
        <div class="col-sm-12">
            <div class="categoriesTitle">
                <Breadcrumbs item_one="Categories"/>
                <button class="btn btn-fefault cart">
                    <router-link to="categories/new">Add new Category</router-link>
                </button>
            </div>
            <h3 class="m-0">Categories</h3>
        </div>
    </div>
</template>

<script setup>
import Breadcrumbs from '../../components/commons/Breadcrumbs.vue';
</script>

<style lang="scss">
.categoriesContainer{
    .categoriesTitle{
        display: flex;
        align-items: center;
        justify-content: space-between;

        button{
            a{
                color: #fff;
            }
        }
    }
}
</style>