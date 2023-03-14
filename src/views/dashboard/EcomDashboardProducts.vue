<template>
    <div class="dashboardContainer">
        <div class="col-md-12 mt-2 prod">
            <div class="dashHeader">
                <Breadcrumbs item_one="Products" />
                <button class="btn btn-fefault cart">
                    <router-link to="products/new">Add new Product</router-link>
                </button>
            </div>
            <table class="productTable">
                <thead>
                    <tr>
                        <th colspan="5">
                            <h3>Products</h3>
                        </th>
                    </tr>
                    <tr class="productTitle">
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product, idx in products" :key="idx">
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td class="productImg">
                            <img :src="imageUrl(product.image)" :alt="product.image">
                        </td>
                        <td>{{ product.cat_id }}</td>
                        <td class="actionItems">
                            <button class="btn cart">
                                <router-link :to="`products/new/${product.id}`">
                                    <Icon icon="ph:pencil-fill" width="24" height="24" />
                                </router-link>
                            </button>
                            <button class="btn">
                                <Icon icon="bi:trash-fill" width="24" height="24" />
                            </button>
                        </td>
                    </tr>

                    <tr class="pagination">
                        <Pagination/>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { computed, onMounted, ref } from "vue";
import store from "../../store";
import Breadcrumbs from '../../components/commons/Breadcrumbs.vue'
import Pagination from "../../components/commons/Pagination.vue";

const imageUrl = (imageName) => new URL(`/src/assets/images/Products/${imageName}`, import.meta.url).href





onMounted(() => {
    // console.log(products)
})

const products = store.state.products
</script>

<style lang="scss">
.dashboardContainer {

    .prod {
        display: flex;
        flex-direction: column;
        row-gap: 12px;

        .dashHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        button.btn {
            align-self: flex-end;

            a {
                color: #fff;
            }
        }
    }

    .productTable {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        padding: 12px;
        box-sizing: border-box;
        border: 1px solid #f0f0e9;
        box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
        border-radius: 4px;

        tbody {
            display: flex;
            flex-direction: column;

            tr {
                display: flex;
                padding: 8px 0;
                box-sizing: border-box;
                border-top: 1px solid rgb(0 0 0 / 12%);

                &.pagination {
                    align-items: center;
                    justify-content: flex-end;

                    nav{
                        display: flex;
                        align-items: center;
                        margin-top: 12px;
                    }

                    ul.pagination {
                        margin: 0 !important;

                        li {
                            a {

                                span{
                                    padding: 0 !important;
                                    background: transparent;
                                }
                            }
                        }
                    }
                }

                td {
                    width: 25%;
                    text-align: center;

                    &:nth-child(1) {
                        text-align: start;
                    }

                    &:nth-child(5) {
                        text-align: end;
                    }

                    &.actionItems {

                        button.cart {
                            margin: 0 !important;
                            margin-right: 12px !important;
                            border-radius: 4px;
                        }
                    }
                }

                td.productImg {
                    width: 25%;
                    height: fit-content;

                    img {
                        width: 40%;
                        object-fit: contain;
                    }
                }
            }
        }

        thead {
            display: flex;
            flex-direction: column;
            row-gap: 12px;

            tr.productTitle {
                width: 100%;
                display: flex;

                th {
                    width: 20%;
                    text-align: center;

                    &:nth-child(1) {
                        text-align: start;
                    }

                    &:nth-child(5) {
                        text-align: end;
                    }
                }
            }
        }
    }
}
</style>