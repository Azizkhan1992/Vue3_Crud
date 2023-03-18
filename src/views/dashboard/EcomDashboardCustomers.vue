<template>
    <div class="customersContainer">
        <div class="col-sm-12">
            <div class="customersTitle">
                <Breadcrumbs item_one="Customers" />
                <button class="btn btn-fefault cart">
                    <router-link to="customer/new">Add new Customer</router-link>
                </button>
            </div>

            <table class="Table">
                <thead>
                    <tr>
                        <th colspan="4">
                            <h3>Customers</h3>
                        </th>
                    </tr>

                    <tr>
                        <th colspan="4" class="search">
                            <div class="input-group">
                                <span class="input-group-addon" id="searchCustomer">
                                    <Icon icon="ri:search-2-line" width="16" height="16" />
                                </span>
                                <input type="text" class="form-control" placeholder="Search Customer"
                                    aria-describedby="basic-addon1">
                            </div>
                        </th>
                    </tr>

                    <tr class="customerTitle">
                        <th>Name</th>
                        <th>Country</th>
                        <th>Spent</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="customer, idx in customers" :key="idx">
                        <td class="customerName">
                            <img :src="imageUrl(customer.image)" :alt="customer.image">
                            <div class="customerInfo">
                                <h4 class="m-0">{{ customer.name }}</h4>
                                <span>{{ customer.email }}</span>
                            </div>
                        </td>
                        <td>{{ customer.country }}</td>
                        <td>{{ customer.spent + ' ' }}$</td>
                        <td class="actionItems">
                            <button class="btn cart">
                                <router-link :to="`customer/new/${customer.id}`">
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
import { Icon } from '@iconify/vue';
import Pagination from '../../components/commons/Pagination.vue';
import store from '../../store';

const imageUrl = (imageName) => new URL(`/src/assets/images/${imageName}`, import.meta.url).href

const customers = store.state.customers

</script>

<style lang="scss">
.customersContainer {
    table.Table {

        thead {
            tr {
                th {
                    display: flex;
                    width: 25%;
                    align-items: center;
                    text-align: center;

                    &.search {
                        width: 100%;
                        margin-bottom: 12px;

                        .input-group {
                            width: 100%;
                        }
                    }

                    &:nth-child(2),
                    &:nth-child(3) {
                        justify-content: center;
                    }

                    &:nth-child(4) {
                        justify-content: flex-end;
                    }
                }
            }
        }

        tr.customerTitle {
            display: flex;
            justify-content: space-between;
        }

        tbody {
            tr {

                td.actionItems {
                    text-align: end;

                    button.btn {
                        a {
                            color: #fff;
                        }
                    }
                }

                td.customerName {
                    display: flex;
                    column-gap: 6px;

                    img {
                        width: 64px;
                    }

                    .customerInfo {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;

                        span {
                            font-size: 1.15rem;
                            color: #6c757d;
                        }
                    }
                }
            }
        }
    }

    .customersTitle {
        display: flex;
        justify-content: space-between;

        button.btn {
            a {
                color: #fff;
            }
        }
    }
}
</style>