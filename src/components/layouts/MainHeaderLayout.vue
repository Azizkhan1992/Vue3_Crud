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
							<a href="/"><img src="../../assets/logo.png" alt="" /></a>
						</div>
					</div>
					<div class="col-sm-8">
						<div class="shop-menu pull-right">
							<ul class="nav navbar-nav headerRight">
								<li><a href="checkout.html"><i class="fa fa-crosshairs"></i> Checkout</a></li>
								<li><a href="cart.html"><i class="fa fa-shopping-cart"></i> Cart</a></li>
								<li><router-link to="/login"><i class="fa fa-lock"></i> Login</router-link></li>
								<li class="logOut" v-if="isUser" @click="logOut">Logout</li>
								<li v-if="isUser" class="userName"><i class="fa fa-user"></i><span>{{ user?.name }}</span></li>
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
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						<div class="mainmenu pull-left">
							<ul class="nav navbar-nav collapse navbar-collapse">
								<li><a href="index.html" class="active">Home</a></li> 
								<li><a href="contact-us.html">Contact</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="search_box pull-right">
							<input type="text" placeholder="Search"/>
						</div>
					</div>
				</div>
			</div>
		</div><!--/header-bottom-->
	</header>
    </div>
</template>

<script setup>
import { reactive, watch, onMounted, ref } from 'vue';
import store from '../../store';

onMounted(() => {
	getUser()
})

const isUser = ref(false)
let user = reactive({})
const users = store.state.users

const getUser = () => {
	if(JSON.parse(sessionStorage.getItem('user'))){
		user = JSON.parse(sessionStorage.getItem('user'))
		isUser.value = true
	} else {
		isUser.value = false
	}
}

function logOut(){
	window.sessionStorage.removeItem('user')
	isUser.value = false
}


watch(users, (newUser) => {
	if(newUser){
		getUser()
	}
})
</script>

<style lang="scss">


li.userName{
	display: flex !important;
	align-items: center;
	padding: 0 !important;
	column-gap: 4px;
	margin-top: 10px;
}

li.logOut{
	margin-top: 10px;
	padding: 0 !important;
	margin-right: 12px;
	cursor: pointer;
}

</style>