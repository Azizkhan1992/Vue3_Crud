<template>
    <div class="categoriesContainer">
        <div class="col-sm-12">
            <div class="categoriesTitle">
                <Breadcrumbs item_one="Categories" />
                <button class="btn btn-fefault cart">
                    <router-link to="categories/new">Add new Category</router-link>
                </button>
            </div>

            <table class="Table">
                <thead>
                    <tr>
                        <th colspan="5">
                            <h3>Categories</h3>
                        </th>
                    </tr>

                    <tr class="categoriesTitle">
                        <th>Name</th>
                        <th>Visibility</th>
                        <th>Actions</th>
                    </tr>
                </thead>


                <tbody>
                    <tr v-for="category, idx in categories" :key="idx" class="categoriesRows">
                        <td>{{ category.name }}</td>
                        <td><span :class="category.visibility ? 'visible' : 'notVisible'">{{ category.visibility ? 'Visible'
                            : 'Hidden' }}</span></td>
                        <td class="actionItems">
                            <button class="btn cart">
                                <router-link :to="`categories/new/${category.id}`">
                                    <Icon icon="ph:pencil-fill" width="24" height="24" />
                                </router-link>
                            </button>
                            <button class="btn">
                                <Icon icon="bi:trash-fill" width="24" height="24" />
                            </button>
                        </td>
                    </tr>
                    <tr class="pagination">
                        <Pagination />
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import Breadcrumbs from '../../components/commons/Breadcrumbs.vue';
import store from '../../store';
import { Icon } from '@iconify/vue'
import Pagination from '../../components/commons/Pagination.vue';

let categories = store.state.categories

</script>

<style lang="scss">
.categoriesContainer {

    table.Table {
        margin-top: 12px;

        tr.categoriesRows {
            justify-content: space-between;

            td {
                span {
                    font-size: 1rem;
                    display: inline-block;
                    padding: 4px 8px;
                    box-sizing: border-box;
                    border-radius: 2px;
                    letter-spacing: 0.04em;

                    &.notVisible {
                        background: #e2e3e5;
                    }

                    &.visible {
                        background: #def2d0;
                    }
                }
            }

            td.actionItems {
                display: flex;
                justify-content: flex-end;

                button.btn {
                    a {
                        display: flex;
                        align-items: center;
                        color: #fff;
                    }
                }
            }
        }
    }

    .categoriesTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            a {
                color: #fff;
            }
        }
    }
}
</style>