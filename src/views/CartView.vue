<template>
    <div class="cartContainer">
        <section id="cart_items">
            <div class="container">
                <div class="breadcrumbs">
                    <ol class="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li class="active">Shopping Cart</li>
                    </ol>
                </div>
                <div class="table-responsive cart_info">
                    <table class="table table-condensed">
                        <thead>
                            <tr class="cart_menu">
                                <td class="image">Item</td>
                                <td class="description"></td>
                                <td class="price">Price</td>
                                <td class="quantity">Quantity</td>
                                <td class="total">Total</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="cartItems.length === 0">
                                <td>
                                    <h3 class="m-0 mt-2">Cart is empty</h3>
                                </td>
                            </tr>
                            <tr v-for="(cart, idx) in cartItems" :key="idx">
                                <td class="cart_product">
                                    <img :src="imageUrl(cart.image)" :alt="cart.image">
                                </td>
                                <td class="cart_description">
                                    <h4>{{ cart.name }}</h4>
                                </td>
                                <td class="cart_price">
                                    <p>{{ cart.price }}$</p>
                                </td>
                                <td class="cart_quantity">
                                    <div class="cart_quantity_button">
                                        <span class="cart_quantity_up" @click="addItem(cart)"> + </span>
                                        <input class="cart_quantity_input" type="text" name="quantity" :value="cart.qty"
                                            autocomplete="off" size="2">
                                        <span class="cart_quantity_down" @click="addItem(cart, true)"> - </span>
                                    </div>
                                </td>
                                <td class="cart_total">
                                    <p class="cart_total_price">{{ cart.price * cart.qty }}$</p>
                                </td>
                                <td class="cart_delete">
                                    <span class="cart_quantity_delete" @click="removeItem(cart.id)"><i
                                            class="fa fa-times"></i></span>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import router from "../router";
import store from "../store";

const imageUrl = (imageName) => new URL(`/src/assets/images/Products/${imageName}`, import.meta.url).href

onMounted(() => {
    // if(store.state.cart.length === 0){
    //     router.push('/')
    // }
})

let count = ref(null)

function findCartItem(id) {
    return store.state.cart.findIndex(item => item.id == id);
}

const addItem = (product, decrease = false) => {
    const cartItemIndex = findCartItem(product.id);
    let mutationName = 'increaseCartItemQty';

    if (decrease) {
        mutationName = 'decreaseCartItemQty';
    }

    if (cartItemIndex > -1) {
        store.commit(`${mutationName}`, cartItemIndex)
    } else {
        store.commit('addToCart', product);
    }
}

const removeItem = (id) => {
    store.commit('removeFromCart', id)
}

const cartItems = computed(() => {
    return store.getters.getCartItems
})

watch(store.state.cart, (val) => {
    for (let i = 1; i < val.length - 1; i++) {
        if (val[i].id === val[i].id) {
            count.value++
        }
    }
})
</script>

<style lang="scss">
.cartContainer {
    .cart_info {
        table {
            tbody {
                tr {
                    td {
                        img {
                            width: 120px;
                        }


                        &.cart_quantity {
                            span {
                                background: #F0F0E9;
                                color: #696763;
                                display: inline-block;
                                font-size: 16px;
                                height: 28px;
                                overflow: hidden;
                                text-align: center;
                                width: 35px;
                                float: left;
                                cursor: pointer;
                            }
                        }

                    }
                }
            }
        }
    }
}

td.cart_delete {
    span {
        background: #F0F0E9;
        color: #FFFFFF;
        padding: 5px 7px;
        font-size: 16px;
        cursor: pointer;

        &:hover {
            background: #fe980f;
        }
    }
}
</style>