///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   28.05.2020             //
//                                   //
///////////////////////////////////////

<template>
    <h1>Completing login. This may take some seconds...</h1>
</template>

<script>
    /* eslint no-console: ["error", { allow: ["log", "error"] }] */
    import { UserManager } from 'oidc-client';

    export default {
        created() {
            let store = this.$store;
            let router = this.$router;
            new UserManager({ response_mode: 'query' }).signinRedirectCallback().then(function () {
                store.dispatch('login');
                router.push('/');
            }).catch(function (e) {
                console.error(e);
            });
        },
        data() {
            return {};
        }        
    }
</script>