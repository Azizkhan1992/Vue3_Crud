<template>
	<div class="homeContent">
		<section>
			<div class="container">
				<div class="row">
					<HomeCategoriesVue @type="productType" />

					<div class="col-sm-9 padding-right">
						<div class="features_items"><!--features_items-->
							<h2 class="title text-center">Features Items</h2>

							<h3 v-if="len === 0">Products not found</h3>

							<div class="sortedProducts">

								<div class="col-sm-4" v-for="product, idx in products.products" :key="idx">

									<div class="added" :class="isAdded && product.id === addedItem ? 'visible' : 'hidden'">
										<h4>Added Succesfully!</h4>
									</div>
									<div class="product-image-wrapper">
										<div class="single-products">
											<div class="productinfo text-center">
												<img :src="imageUrl(product.image)" :alt="product.image" />
												<h2>{{ product.price }}$</h2>
												<router-link :to="`/product-item/${product.id}`">{{ product.name
												}}</router-link>
												<button class="btn btn-default add-to-cart" @click="addToCart(product)">
													<i class="fa fa-shopping-cart"></i>
													Add to cart
												</button>
											</div>
											<div class="product-overlay">
												<div class="overlay-content">
													<h2>{{ product.price }}$</h2>
													<router-link :to="`/product-item/${product.id}`">{{ product.name
													}}</router-link>
													<button class="btn btn-default add-to-cart" @click="addToCart(product)">
														<i class="fa fa-shopping-cart"></i>
														Add to cart
													</button>
												</div>
											</div>
											<img v-if="product.isNew" class="new" src="../../../assets/images/new.png"
												alt="">
										</div>
									</div>
								</div>
							</div>

						</div><!--features_items-->

						<!--/category-tab-->
						<HomeTab />

						<!--/recommended_items-->
						<HomeRecommendedItemsVue />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script setup>
import HomeCategoriesVue from "./HomeCategories.vue";
import HomeRecommendedItemsVue from "./HomeRecommendedItems.vue";
import HomeTab from "./HomeTab.vue";
import store from "../../../store";
import { ref, onMounted, watch, reactive, computed } from "vue";

const imageUrl = (imageName) => new URL(`/src/assets/images/Products/${imageName}`, import.meta.url).href

let isAdded = ref(false)
let addedItem = ref(null)

onMounted(() => {
	getItems()
})


let products = reactive({
	products: []
})

let len = ref('')

let type = ref('')

const productType = (val) => {
	type.value = val
}

const addToCart = (product) => {
	isAdded.value = true
	addedItem.value = product.id

	setTimeout(() => {
		isAdded.value = false
	}, 1500)
	store.commit('addToCart', { ...product, qty: 1 })
}

const getItems = () => {
	if (type.value === '') {
		products.products = store.state.products
		len = products.products.length
	} else {
		let items = store.state.products
		products.products = items.filter(e => e.cat_id === type.value)
		len = products.products.length
	}
}

watch(type, (newVal) => {
	if (newVal) {
		getItems()
	}
})
</script>
<style lang="scss">
.homeContent {
	.product-image-wrapper {
		.single-products {
			a {
				display: block;
				color: #8c8c88;
				font-size: 1.5rem;
				font-weight: 500;
				margin: 12px 0;

				&:hover {
					color: #000;
				}
			}
		}
	}
}

.sortedProducts {
	position: relative;
}</style>