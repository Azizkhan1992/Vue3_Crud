<template>
    <div class="dashboardOrdersContainer">
        <div class="col-sm-12">
            <div class="ordersTitle">
                <Breadcrumbs item_one="Orders" />
                <button class="btn btn-fefault cart">
                    <router-link to="orders/new">Add new Order</router-link>
                </button>
            </div>

            <table class="Table">
                <thead>
                    <tr>
                        <th colspan="8">
                            <h3>Orders</h3>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="8" class="search">
                            <div class="input-group">
                                <span class="input-group-addon" id="searchOrder">
                                    <Icon icon="ri:search-2-line" width="16" height="16" />
                                </span>
                                <input type="text" class="form-control" placeholder="Search Order"
                                    aria-describedby="basic-addon1">
                            </div>
                        </th>
                    </tr>
                    <tr class="tableTitle">
                        <th>Number</th>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Paid</th>
                        <th>Status</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="order, idx in orders" :key="idx">
                        <td>#{{ ' ' + order.number }}</td>
                        <td>{{ getDay(order.date) + ' ' + getMonth(order.date) + ' ' + getYear(order.date) }}</td>
                        <td>{{ order.customerName }}</td>
                        <td><span class="pay" :class="order.paid ? 'paid' : 'unpaid'">{{ order.paid ? 'yes' : 'no' }}</span>
                        </td>
                        <td><span class="status" :class="order.status ? 'newI' : 'delivered'">{{ order.status ? 'new' :
                            'shipped' }}</span></td>
                        <td>{{ order.items == 1 ? '1 item' : `${order.items} items` }}</td>
                        <td>{{ order.total + ' ' }} $</td>
                        <td class="actionItems">
                            <button class="btn cart">
                                <router-link :to="`orders/new/${order.id}`">
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
import { reactive } from 'vue';
const months = reactive([
    {
        id: 1,
        name: 'Jan'
    },
    {
        id: 2,
        name: 'Feb'
    },
    {
        id: 3,
        name: 'Mar'
    },
    {
        id: 4,
        name: 'Apr'
    },
    {
        id: 5,
        name: 'May'
    },
    {
        id: 6,
        name: 'Jun'
    },
    {
        id: 7,
        name: 'Jul'
    },
    {
        id: 8,
        name: 'Aug'
    },
    {
        id: 9,
        name: 'Sep'
    },
    {
        id: 10,
        name: 'Oct'
    },
    {
        id: 11,
        name: 'Nov'
    },
    {
        id: 12,
        name: 'Dec'
    }
])

const orders = store.state.orders

let getMonth = (date) => {
    let temp = new Date(date).getMonth() + 1
    return months.find(e => e.id == temp).name
}

let getDay = (date) => {
    let temp = new Date(date).getDate()
    return temp
}

let getYear = (date) => {
    let temp = new Date(date).getFullYear()
    return temp
}
</script>

<style lang="scss">
.dashboardOrdersContainer {
    table.Table {
        thead {
            tr {
                display: flex;

                th {
                    display: flex;
                    width: 12.5%;
                    justify-content: center;

                    &:nth-child(1) {
                        justify-content: flex-start;
                    }

                    &:nth-child(8) {
                        justify-content: flex-end;
                    }
                }

                &.tableTitle {
                    margin-top: 12px;
                    display: flex;
                    justify-content: space-between;
                }

                th.search {
                    display: flex;
                    width: 100%;

                    .input-group {
                        width: 100%;
                    }
                }
            }
        }

        tbody {
            tr {
                justify-content: space-between;

                &.pagination {
                    justify-content: flex-end;
                }

                td {
                    display: flex;
                    width: 12.5%;
                    justify-content: center;
                    align-items: center;

                    span.status {
                        padding: 4px 8px;
                        box-sizing: border-box;
                        border-radius: 2px;

                        &.newI {
                            background: #ffdcdc;
                            color: #900;
                        }

                        &.shipped {
                            background: #def2d0;
                            color: #245900;
                        }
                    }

                    span.pay {
                        padding: 4px 8px;
                        box-sizing: border-box;
                        border-radius: 2px;

                        &.paid {
                            background: #def2d0;
                            color: #245900;
                        }

                        &.unpaid {
                            background: #e2e3e5;
                            color: #444a4f;
                        }
                    }

                    &:nth-child(1) {
                        justify-content: flex-start;
                    }
                }
            }
        }
    }

    .ordersTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button.btn {
            a {
                color: #fff;
            }
        }
    }
}</style>