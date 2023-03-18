<template>
    <div class="newOrderContainer">
        <div class="col-sm-12">
            <Breadcrumbs item_one="Orders" route_val="orders" :item_two="title" />

            <div class="newOrderTitle">
                <div class="titleLeft">
                    <h3 v-if="checker == true">New Order</h3>
                    <h3 v-else>Edit Order </h3>
                    <h3 v-if="singleOrder.number">{{ '#' + singleOrder.number }}</h3>
                </div>

                <button class="btn btn-fefault cart">
                    Save
                </button>
            </div>

            <div class="newOrderItems">
                <div class="leftItems boxSh">
                    <div class="form-group">
                        <label for="newOrder">Order number</label>
                        <input type="number" class="form-control" id="newOrder" placeholder="Order number"
                            :value="singleOrder.number">
                    </div>

                    <div class="select">
                        <label for="selectProduct">Select Product</label>
                        <select class="form-control" id="selectProduct">
                            <option v-for="product, i in selectedProducts" :key="i" :value="product.id">{{ product.name }}
                            </option>
                        </select>
                    </div>

                    <div class="selectPay mt-2">
                        <label for="selectPay">Paid</label>
                        <select class="form-control" id="selectPay">
                            <option value="1">Paid</option>
                            <option value="2">Unpaid</option>
                        </select>
                    </div>


                </div>


                <div class="rightItems boxSh">
                    <label for="selectCustomer">Select Customer</label>
                    <select class="form-control" id="selectCustomer">
                        <option v-for="customer, i in customers" :key="i" :value="customer.id">{{ customer.name }}
                        </option>
                    </select>

                    <div class="selectStatus mt-2">
                        <label for="selectS">Select Status</label>
                        <select class="form-control" id="selectS">
                            <option value="1">Delivered</option>
                            <option value="2">Not Delivered</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import Breadcrumbs from '../../components/commons/Breadcrumbs.vue';
import store from '../../store';

let route_value = window.location.pathname
let checker = ref(false)
let title = ref('')

let selectedProducts = store.state.products

let customers = store.state.customers
let orderKey = ref(null)

let singleOrder = reactive({})

const orders = store.state.orders

onMounted(() => {
    routeChecker()
})


const routeChecker = () => {
    let len = route_value.split('/').length
    if (len === 4) {
        checker.value = true
        title.value = 'New Order'
    } else {
        checker.value = false
        title.value = 'Edit Order'
        orderKey.value = route_value.split('/').pop()
        getSingleOrder(orderKey)

    }
}

const getSingleOrder = (key) => {
    orders.forEach(elem => {
        if (elem.id == key.value) {
            singleOrder = elem
        }
    })
}
</script>

<style lang="scss">
.newOrderContainer {
    .newOrderItems {
        display: flex;
        justify-content: space-between;

        .leftItems {
            width: calc(100% - 320px);
            padding: 12px;
            box-sizing: border-box;
        }

        .rightItems {
            width: 300px;
            padding: 12px;
            box-sizing: border-box;
        }
    }

    .newOrderTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .titleLeft {
            display: flex;
            align-items: center;
            column-gap: 8px;
        }
    }
}
</style>