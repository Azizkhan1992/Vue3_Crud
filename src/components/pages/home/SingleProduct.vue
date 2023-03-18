<template>
    <div class="singleProduct">
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="blog-post-area" v-if="Object.keys(singleProduct).length > 0">
                            <h2 class="title text-center">Latest From our Blog</h2>
                            <div class="single-blog-post">
                                <h3>{{ singleProduct.name }}</h3>

                                <img :src="imageUrl(singleProduct.image)" :alt="singleProduct.image" />
                                <div class="productDesc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.</p> <br>

                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                        illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <br>

                                    <p>
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p> <br>

                                    <p>
                                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                        magnam aliquam quaerat voluptatem.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div v-else class="single-blog-post">
                            Not found
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import { useRoute } from "vue-router";
import store from "../../../store"

const route = useRoute();

const imageUrl = (imageName) => new URL(`/src/assets/images/Products/${imageName}`, import.meta.url).href

let productId = ref(null)
let singleProduct = reactive({})


const getProductId = () => {
    productId.value = route.params.id;
    singleProduct = store.state.products.find(e => e.id == productId.value);
}

getProductId();
</script>

<style lang="scss">.singleProduct {
    margin-bottom: 12px;

    .single-blog-post {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 24px;
    }
}</style>