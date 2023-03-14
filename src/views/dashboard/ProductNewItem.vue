<template>
    <div class="newProductContainer">
        <div class="col-sm-12">
            <Breadcrumbs item_one="Products" :item_two="title" route_val="products" />
            <div class="productTitle">
                <h3 v-if="checker == true">New Product</h3>
            <h3 v-else>Edit Product</h3>

            <button class="btn btn-fefault cart">
                Save
            </button>
            </div>


            <div class="newProductItems">
                <div class="leftItems boxSh">
                    <h3>Basics</h3>
                    <div class="form-group">
                        <label for="exampleName">Product name</label>
                        <input type="text" class="form-control" id="exampleName" placeholder="Product name" :value="singleProduct.name">
                    </div>

                    <label for="basic-url">Slug</label>
                    <div class="input-group">
                        <span class="input-group-addon" id="basic-addon3">https://example.com/products/</span>
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                    </div>

                    <div class="editorInput mt-3">
                        <label for="editor">Description</label>
                        <ContentEditor v-model="content" id="editor" />
                    </div>

                    <div class="textarea mt-3">
                        <label for="area">Short description</label>
                        <textarea class="form-control" rows="3" id="area"></textarea>
                    </div>

                    <h3 class="mt-3">Pricing</h3>
                    <div class="priceProduct mt-3">
                        <div class="form-group">
                            <label for="exampleInputP">Price</label>
                            <input type="number" class="form-control" id="exampleInputP" placeholder="Price">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputP1">Old Price</label>
                            <input type="number" class="form-control" id="exampleInputP1" placeholder="Old Price" :value="singleProduct.price">
                        </div>
                    </div>

                    <h3 class="mt-3">Inventory</h3>
                    <div class="inventoring">
                        <div class="form-group">
                            <label for="exampleInv">Artikul</label>
                            <input type="number" class="form-control" id="exampleInv" placeholder="Artikul">
                        </div>
                        <div class="form-group">
                            <label for="exampleInv1">Stock quantity</label>
                            <input type="number" class="form-control" id="exampleInv1" placeholder="Stock quantity">
                        </div>
                    </div>

                    <div class="uploadImage">
                        <div class="imageForm">
                            <h3>Images</h3>
                        <div class="form-group">
                            <label for="exampleInputFile">Image input</label>
                            <input type="file" id="exampleInputFile">
                        </div>
                        </div>

                        <img v-if="singleProduct.image" :src="imageUrl(singleProduct.image)" :alt="singleProduct.image" />
                    </div>
                </div>

                <div class="rightItems boxSh">
                    <div class="visibilityProduct">
                        <h3>Visibility</h3>
                        <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                            Published
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                            Scheduled
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">
                            Hidden
                        </label>
                    </div>
                    </div>

                    <div class="ProductDatepicker mt-3">
                        <label for="pick">Publish date</label>
                    <Datepicker :value="state.date" id="pick"/>
                </div>
                </div>

                
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import Breadcrumbs from '../../components/commons/Breadcrumbs.vue';
import ContentEditor from '../../components/commons/ContentEditor.vue';
import Datepicker from 'vuejs3-datepicker'
import store from '../../store';

const imageUrl = (imageName) => new URL(`/src/assets/images/Products/${imageName}`, import.meta.url).href

let route_value = window.location.pathname

const products = store.state.products

let singleProduct = reactive({})

let checker = ref(false)
let title = ref('')

let state = ref({
    date: new Date()
})

const content = ref('')

let productKey = ref(null)


onMounted(() => {
    routeChecker()
})

const routeChecker = () => {
    let len = route_value.split('/').length
    if (len === 4) {
        checker.value = true
        title.value = 'New Product'
    } else {
        checker.value = false
        title.value = 'Edit Product'
        productKey.value = route_value.split('/').pop()
        getSingleProduct(productKey)

    }
}

const getSingleProduct = (key) => {
    products.forEach(elem =>{
        if(elem.id == key.value){
            singleProduct = elem
        }
    })
}



</script>

<style lang="scss">
.newProductContainer {
    width: 100%;
    height: fit-content;

    .col-sm-12 {
        float: none !important;

        .uploadImage{
            display: flex;
        }

        .productTitle{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .newProductItems {
            display: flex;
            margin-top: 24px;
            justify-content: space-between;

            .rightItems{
                width: 300px;   
                padding: 12px;
                border-radius: 4px;
                box-sizing: border-box;
            }


            .leftItems {
                width: calc(100% - 320px);
                padding: 12px;
                border-radius: 4px;
                box-sizing: border-box;

                .priceProduct {
                    display: flex;
                    justify-content: space-between;

                    .form-group {
                        width: calc(50% - 12px);
                    }
                }
            }
        }
    }
}
</style>