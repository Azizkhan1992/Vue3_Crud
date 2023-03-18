<template>
    <div class="newCategoryContainer">
        <div class="col-sm-12">
            <Breadcrumbs item_one="Categories" route_val="categories" :item_two="title" />
            <div class="newCategoryTitle">
                <h3 v-if="checker == true">New Category</h3>
                <h3 v-else>Edit Category</h3>

                <button class="btn btn-fefault cart">
                    Save
                </button>
            </div>


            <div class="newCategoryItems">
                <div class="leftItems boxSh">
                    <h3>Basics</h3>
                    <div class="form-group">
                        <label for="categoryName">Category name</label>
                        <input type="text" class="form-control" id="categoryName" placeholder="Category name"
                            :value="singleCategory.name">
                    </div>

                    <label for="basic-category">Slug</label>
                    <div class="input-group">
                        <span class="input-group-addon" id="basic-addon3">https://example.com/categories/</span>
                        <input type="text" class="form-control" id="basic-category" aria-describedby="basic-addon3">
                    </div>

                    <div class="editorInput mt-3">
                        <label for="editorCategory">Description</label>
                        <ContentEditor v-model="content" id="editorCategory" />
                    </div>
                </div>
                <div class="rightItems boxSh">
                    <h3>Visibility</h3>

                    <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                            Visible
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">
                            Hidden
                        </label>
                    </div>

                    <div class="CategoryDatepicker mt-3">
                        <label for="pick">Publish date</label>
                        <Datepicker :value="state.date" id="pick" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import Breadcrumbs from '../../components/commons/Breadcrumbs.vue';
import ContentEditor from '../../components/commons/ContentEditor.vue';
import Datepicker from 'vuejs3-datepicker'
import store from '../../store';



const content = ref('')

let route_value = window.location.pathname

const categories = store.state.categories

let singleCategory = reactive({})

let categoryKey = ref(null)

let checker = ref(false)

let title = ref('')

let state = ref({
    date: new Date()
})

onMounted(() => {
    routeChecker()
})

const routeChecker = () => {
    let len = route_value.split('/').length
    if (len === 4) {
        checker.value = true
        title.value = 'New Category'
    } else {
        checker.value = false
        title.value = 'Edit Category'
        categoryKey.value = route_value.split('/').pop()
        getSingleCategory(categoryKey)

    }
}

const getSingleCategory = (key) => {
    categories.forEach(elem => {
        if (elem.id == key.value) {
            singleCategory = elem
        }
    })
}
</script>

<style lang="scss">
.newCategoryContainer {
    .newCategoryTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .newCategoryItems {
        min-height: 680px;
        display: flex;
        justify-content: space-between;

        .leftItems {
            width: calc(100% - 320px);
            padding: 12px;
            box-sizing: border-box;
            border-radius: 4px;
        }

        .rightItems {
            width: 300px;
            padding: 12px;
            box-sizing: border-box;
            border-radius: 4px;

            .CategoryDatepicker {
                .vuejs3-datepicker__calendar {
                    width: 260px;
                }
            }
        }
    }
}
</style>