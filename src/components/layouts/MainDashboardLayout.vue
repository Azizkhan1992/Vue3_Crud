<template>
    <div class="dashboardLayout">
        <div class="header_top">
            <div class="col-sm-12">
                <div class="logo pull-left">
                    <Icon icon="ph:list-light" width="32" height="32" class="toggleIcon" @click="changeToggle" />
                    <a href="/"><img src="../../assets/logo.png" alt="" /></a>
                </div>
            </div>
            <div class="shop-menu pull-right">
                <ul class="nav navbar-nav headerRight">
                    <li class="logOut" v-if="isUser" @click="logOut">Logout</li>
                    <li v-if="isUser" class="userName"><i class="fa fa-user"></i><span>{{ user?.name }}</span></li>
                </ul>
            </div>
            <div class="animatedTextContainer">
                <h4 class="movedT">This is CRUD example</h4>
            </div>


        </div>

        <div class="dashboardWrapper">
            <div class="navContainer" :class="isToggle ? 'active' : 'deactive'">
                <div class="col-sm-9">
                    <ul>
                        <li class="dashLink">
                            <Icon icon="clarity:dashboard-solid" width="24" height="24" />
                            <router-link class="colorT" to="/dashboard/dashboard-home">Dashboard</router-link>
                        </li>

                        <li class="dashLink">
                            <Icon icon="gridicons:product-downloadable" width="24" height="24" />
                            <router-link class="colorT" to="/dashboard/products">Products</router-link>
                        </li>

                        <li class="dashLink">
                            <Icon icon="carbon:category" width="24" height="24" />
                            <router-link class="colorT" to="/dashboard/categories">Categories</router-link>
                        </li>
                        <li class="dashLink">
                            <Icon icon="ic:baseline-person-outline" width="24" height="24" />
                            <router-link class="colorT" to="/dashboard/customers">Customers</router-link>
                        </li>
                        <li class="dashLink">
                            <Icon icon="material-symbols:shopping-cart-outline" width="24" height="24" />
                            <router-link class="colorT" to="/dashboard/orders">Orders</router-link>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="mobileNavContainer" :class="isToggle ? 'deactive' : 'active'">
                <div class="col-sm-9">
                    <ul>
                        <li class="dashLink">
                            <Icon icon="clarity:dashboard-solid" width="24" height="24" />
                            <router-link to="/dashboard/dashboard-home">Dashboard</router-link>
                        </li>
                        <li class="dashLink">
                            <Icon icon="gridicons:product-downloadable" width="24" height="24" />
                            <router-link to="/dashboard/products">Products</router-link>
                        </li>
                        <li class="dashLink">
                            <Icon icon="carbon:category" width="24" height="24" />
                            <router-link to="/dashboard/categories">Categories</router-link>
                        </li>
                        <li class="dashLink">
                            <Icon icon="material-symbols:shopping-cart-outline" width="24" height="24" />
                            <router-link to="/dashboard/orders">Orders</router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="dashboardContent" :class="isToggle ? 'deactive' : 'active'">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { reactive, watch, onMounted, ref, computed } from 'vue';
import router from '../../router';
import store from '../../store';

onMounted(() => {
    getUser()
})

let isToggle = computed(() => {
    return store.getters.getToggler
})

const changeToggle = () => {
    store.commit('setToggle')
}


const isUser = ref(false)
let user = reactive({})
const users = store.state.users

const getUser = () => {
    if (JSON.parse(sessionStorage.getItem('user'))) {
        user = JSON.parse(sessionStorage.getItem('user'))
        isUser.value = true
    } else {
        isUser.value = false
    }
}

function logOut() {
    window.sessionStorage.removeItem('user')
    isUser.value = false
    router.push({ path: '/' })
}


watch(users, (newUser) => {
    if (newUser) {
        getUser()
    }
})
</script>

<style lang="scss">
.dashboardLayout {
    .header_top {
        height: 80px;
        padding: 8px 0;
        box-sizing: border-box;
        position: fixed;
        width: 100%;
        z-index: 1999;
    }

    .logo {
        display: flex;
        align-items: center;
        column-gap: 12px;

        .toggleIcon {
            padding-top: 4px;
            box-sizing: border-box;
            cursor: pointer;
        }
    }

    .dashboardWrapper {
        display: flex;
        justify-content: space-between;

        .dashboardContent {
            width: calc(100% - 260px);
            transition: 0.24s linear;
            margin-top: 100px;
            box-sizing: border-box;

            &.active {
                width: 100%;
                position: absolute;
                right: 0;
                padding: 0 0 12px 12px;
            }

            &.deactive {
                padding: 0 0 12px 0;
                margin-left: 250px;
            }
        }
    }

    .mobileNavContainer {
        display: none;
    }

    .navContainer {
        min-width: 120px;
        width: 240px;
        min-height: 100vh;
        margin-top: 8px;
        background: #f0f0e9;
        transform-origin: left;
        transition: 0.24s linear;
        padding: 24px 0 12px 12px;
        box-sizing: border-box;
        position: fixed;
        z-index: 999;
        top: 80px;

        &.deactive {
            transform: scaleX(0);
        }

        &.active {
            transform: scaleX(1);

        }

        ul {
            padding: 0;

            li.dashLink {
                display: flex;
                align-items: center;
                column-gap: 12px;
                margin-top: 12px;
            }
        }
    }

    .col-sm-4 {
        padding: 4px;
        box-sizing: border-box;
    }

    .animatedTextContainer {
        margin-top: 18px;
    }
}

li.userName {
    display: flex !important;
    align-items: center;
    padding: 0 !important;
    column-gap: 4px;
    margin-top: 10px;
}

li.logOut {
    margin-top: 10px;
    padding: 0 !important;
    margin-right: 12px;
    cursor: pointer;
}

.shop-menu {
    position: absolute;
    background: #f0f0e9;
    padding: 0 12px;
    box-sizing: border-box;
    right: 120px;
    top: 8px;
    z-index: 199;
}

@media screen and (max-width: 480px) {
    .container {
        height: 60px !important;
    }

    .logo {
        width: 50% !important;
    }

    .shop-menu {
        right: 40px !important;
        top: 0 !important;

        ul {
            display: flex !important;
        }
    }

    .animatedTextContainer {
        h4.movedT {
            font-size: 1rem !important;
        }
    }
}

// @media screen and (min-width: 1441px) {
//     .navContainer{
//         width: 340px !important;
//         justify-content: flex-end !important;

//         ul{
//             padding-left: 40px !important;
//         }
//     }
//     .dashboardContent{
//         width: calc(100% - 360px) !important;
//     }
// }
</style>