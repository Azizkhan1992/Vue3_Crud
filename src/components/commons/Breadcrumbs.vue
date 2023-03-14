<template>
    <div class="breadcrumbsContainer">
        <div class="breadcrumbsWrapper">
            <h5>
                <router-link to="/dashboard/dashboard-home">Dashboard</router-link>
            </h5>
            /
            <h5 v-if="item_two">
            <router-link :to="`/dashboard/${route_val}`">{{ item_one }}</router-link>
            </h5>
            <h5 v-else>{{ item_one }}</h5>
            <p v-if="item_two" class="m-0">/</p>
            <h5>{{ item_two }}</h5>
        </div>
    </div>
</template>

<script setup>


defineProps({
    item_one: {
        type: String,
        default: ''
    },
    item_two: {
        type: String,
        default: ''
    },
    route_val: {
        type: String
    }
})

</script>

<style lang="scss">
.breadcrumbsContainer{

    .breadcrumbsWrapper{
        display: flex;
        align-items: center;
        column-gap: 4px;
    }
}
</style>