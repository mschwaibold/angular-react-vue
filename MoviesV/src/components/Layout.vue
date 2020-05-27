///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   26.05.2020             //
//                                   //
///////////////////////////////////////

<template>
    <div>
        <NavMenu />
        <b-container>
            <router-view></router-view>
        </b-container>
    </div>
</template>

<script>
    import NavMenu from './NavMenu.vue';

    export default {
        components: {
            NavMenu
        },
        data() {
            return {};
        }
    }
</script>

<style>
</style>