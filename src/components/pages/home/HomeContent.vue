<template>
    <div class="homeContent">
        <section>
		<div class="container">
			<div class="row">
				<HomeCategoriesVue @type="productType"/>
				
				<div class="col-sm-9 padding-right">
					<div class="features_items"><!--features_items-->
						<h2 class="title text-center">Features Items</h2>

						<h3 v-if="len === 0">Products not found</h3>
						
						<div class="sortedProducts">
							<div class="col-sm-4" v-for="product, idx in products.products" :key="idx">
							<div class="product-image-wrapper">
								<div class="single-products">
										<div class="productinfo text-center">
											<img :src="imageUrl(product.image)" :alt="product.image" />
											<h2>$56</h2>
											<p>Easy Polo Black Edition</p>
											<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
										</div>
										<div class="product-overlay">
											<div class="overlay-content">
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
										</div>
								</div>
								<div class="choose">
									<ul class="nav nav-pills nav-justified">
										<li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
										<li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
									</ul>
								</div>
							</div>
						</div>
						</div>
						
					</div><!--features_items-->
					
					<!--/category-tab-->
                    <HomeTab/>
					
					<!--/recommended_items-->
                    <HomeRecommendedItemsVue/>
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

const getItems = () => {
	if(type.value === ''){
		products.products = store.state.products
		len = products.products.length
	} else{
		let items = store.state.products
		products.products = items.filter(e => e.cat_id === type.value)
		len = products.products.length
	}
}

watch(type, (newVal) => {
	if(newVal){
		getItems()
	}
})
</script>