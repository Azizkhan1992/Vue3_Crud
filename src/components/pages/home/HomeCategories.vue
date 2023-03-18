<template>
	<div class="categoriesContainer">
		<div class="col-sm-3">
			<div class="left-sidebar">
				<h2>Category</h2>
				<div class="panel-group category-products" id="accordian"><!--category-productsr-->

					<div class="panel panel-default" v-for="item, idx in categories" :key="idx" v-show="item.visibility">
						<div class="panel-heading" @click="emit('type', item.id)">
							<h4 class="panel-title">{{ item.name }}</h4>
						</div>
					</div>

				</div><!--/category-products-->

				<div class="shipping text-center"><!--shipping-->
					<img src="../../../assets/images/shipping.jpg" alt="" />
				</div><!--/shipping-->

			</div>
		</div>
	</div>
</template>

<script setup>
import store from '../../../store'


const categories = store.state.categories

const emit = defineEmits(['type'])

</script>

<style lang="scss">
.panel-title {
	color: #696763 !important;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	text-decoration: none;
	text-transform: uppercase;
	cursor: pointer;
}
</style>