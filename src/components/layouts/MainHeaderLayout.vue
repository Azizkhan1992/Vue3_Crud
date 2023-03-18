<template>
	<div class="mainHeaderContainer">
		<header id="header"><!--header-->
			<div class="header_top"><!--header_top-->
				<div class="container">
					<div class="animatedTextContainer">
						<h4 class="movedT">This is CRUD example</h4>
					</div>
				</div>
			</div><!--/header_top-->

			<div class="header-middle"><!--header-middle-->
				<div class="container">
					<div class="row">
						<div class="col-sm-4">
							<div class="logo pull-left">
								<router-link to="/"><img src="../../assets/logo.png" alt="" /></router-link>
							</div>
						</div>
						<div class="col-sm-8">
							<div class="shop-menu pull-right">
								<ul class="nav navbar-nav headerRight">
									<li class="cartItem">
										<span>{{ cartItems.length }}</span>
										<router-link to="/cart"><i class="fa fa-shopping-cart"></i> Cart</router-link>
									</li>
									<li><router-link to="/register" v-if="isUser === false"><i class="fa fa-lock"></i>
											Register</router-link></li>
									<li class="logOut" v-if="isUser" @click="logOut">Logout</li>
									<li v-if="isUser" class="userName"><i class="fa fa-user"></i><span>{{ user?.name
									}}</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div><!--/header-middle-->

			<div class="header-bottom"><!--header-bottom-->
				<div class="container">
					<div class="row">
						<div class="col-sm-9">
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse"
									data-target=".navbar-collapse">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div>
							<div class="mainmenu pull-left">
								<ul class="nav navbar-nav collapse navbar-collapse">
									<li><router-link to="/">Home</router-link></li>
									<li><router-link to="/contact">Contact</router-link></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="search_box pull-right">
								<span :class="isDashboard ? 'active' : 'deactive'">Go to Dashboard</span>
								<router-link to="/dashboard">
									<Icon icon="cib:go" width="36" height="36" @mouseover="isDashboard = true"
										@mouseleave="isDashboard = false" />
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div><!--/header-bottom-->
		</header>
	</div>
</template>

<script setup>
import { reactive, watch, onMounted, ref, computed } from 'vue';
import store from '../../store';
import { Icon } from '@iconify/vue';

onMounted(() => {
	getUser()
})

let isDashboard = ref(false)

const cartItems = computed(() => {
	return store.getters.getCartItems
})

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
}


watch(users, (newUser) => {
	if (newUser) {
		getUser()
	}
})

</script>

<style lang="scss">
.mainHeaderContainer {

	.search_box {
		span {
			display: inline-block;
			transform-origin: right;
			transition: 0.24s linear;
			padding: 4px;
			box-sizing: border-box;
			border: 1px solid #999;
			position: absolute;
			right: 48px;
			top: 24px;
			border-radius: 2px;

			&.deactive {
				transform: scaleX(0);
			}

			&.active {
				transform: scaleX(1);
			}
		}
	}

	.shop-menu {
		li.cartItem {
			position: relative;

			span {
				display: inline-block;
				position: absolute;
				top: -6px;
				right: 4px;
				padding: 2px 4px;
				box-sizing: border-box;
				font-size: 1.15rem;
				background: red;
				color: #fff;
				border-radius: 50%;
				z-index: 99;
			}
		}
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
}</style>