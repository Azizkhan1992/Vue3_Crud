<template>
    <div class="mainLayout">
        <MainHeaderLayout/>

        <RouterView/>

        <MainFooterLayout/>
    </div>
</template>

<script setup>
import MainHeaderLayout from './MainHeaderLayout.vue';
import MainFooterLayout from './MainFooterLayout.vue';

</script>

<style lang="scss">

</style>