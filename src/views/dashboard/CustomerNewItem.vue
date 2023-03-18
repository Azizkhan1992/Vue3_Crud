<template>
    <div class="newCustomerContainer">
        <div class="col-sm-12">
            <Breadcrumbs item_one="Customers" route_val="customers" :item_two="title" />

            <div class="newCustomersTitle">
                <h3 v-if="checker == true">New Customer</h3>
                <h3 v-else>Edit Customer</h3>

                <button class="btn btn-fefault cart">
                    Save
                </button>
            </div>

            <div class="newCustomerItems">
                <div class="leftItems boxSh">
                    <div class="customerInfo">
                        <img :src="imageUrl(singleCustomer.image)" :alt="singleCustomer.image" v-if="singleCustomer.image">

                        <Icon icon="ion:person-sharp" width="48" height="48" v-else />
                        <h3 v-if="singleCustomer.name">{{ singleCustomer.name }}</h3>
                        <h3 v-else>Customer Name</h3>
                        <p v-if="singleCustomer.email">{{ singleCustomer.email }}</p>
                        <p v-else>Customer email</p>
                        <p v-if="singleCustomer.phone">{{ singleCustomer.phone }}</p>
                        <p v-else>Customer phone</p>
                    </div>

                    <div class="customerImage mt-2">
                        <div class="form-group">
                            <label for="exampleInputFile">
                                <h4>Customer Image</h4>
                            </label>
                            <input type="file" id="exampleInputFile">
                        </div>
                    </div>
                </div>
                <div class="rightItems boxSh">
                    <textarea class="form-control" rows="3" placeholder="Notes about Customer"></textarea>

                    <table class="Table mt-2">
                        <thead>
                            <tr>
                                <th colspan="5">Orders</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#80294</td>
                                <td>Today</td>
                                <td>Pending</td>
                                <td>4 Items</td>
                                <td>320 $</td>
                            </tr>
                            <tr>
                                <td>#40278</td>
                                <td>January 7, 2022</td>
                                <td>Completed</td>
                                <td>2 Items</td>
                                <td>700 $</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="form-group mt-2">
                        <label for="customerAdd">Customer address</label>
                        <input type="text" class="form-control" id="customerAdd" placeholder="Customer address">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import Breadcrumbs from '../../components/commons/Breadcrumbs.vue';
import { Icon } from '@iconify/vue';
import store from '../../store';

const imageUrl = (imageName) => new URL(`/src/assets/images/${imageName}`, import.meta.url).href

let route_value = window.location.pathname
let checker = ref(false)

const customers = store.state.customers

let title = ref('')
let customerKey = ref(null)
let singleCustomer = reactive({})

onMounted(() => {
    routeChecker()
})


const routeChecker = () => {
    let len = route_value.split('/').length
    if (len === 4) {
        checker.value = true
        title.value = 'New Customer'
    } else {
        checker.value = false
        title.value = 'Edit Customer'
        customerKey.value = route_value.split('/').pop()
        getSingleCustomer(customerKey)

    }
}

const getSingleCustomer = (key) => {
    customers.forEach(elem => {
        if (elem.id == key.value) {
            singleCustomer = elem
        }
    })
}
</script>

<style lang="scss">
.newCustomerContainer {
    .newCustomerItems {
        display: flex;
        justify-content: space-between;

        .rightItems {
            width: calc(100% - 340px);
            padding: 12px;
            box-sizing: border-box;
        }

        .leftItems {
            width: 320px;
            padding: 12px;
            box-sizing: border-box;


            .customerInfo {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid #2125291a;

                img {
                    width: 120px;
                }
            }
        }
    }

    .newCustomersTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>