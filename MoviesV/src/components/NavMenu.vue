///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   26.05.2020             //
//                                   //
///////////////////////////////////////

<template>
    <header>
        <b-navbar class="border-bottom box-shadow mb-3" toggleable="sm" type="light">
            <b-container>
                <b-navbar-brand to="/">MoviesV</b-navbar-brand>
                <b-navbar-toggle target="menu-links-collapse" class="mr-2" />
                <b-collapse id="menu-links-collapse" class="d-sm-inline-flex flex-sm-row-reverse" is-nav>
                    <ul class="navbar-nav flex-grow">
                        <li class="nav-item" v-show="!$store.state.isAuthenticated">
                            <a class="nav-link text-dark" @click="login()" style="cursor: pointer">Login</a>
                        </li>
                        <li class="nav-item" v-show="$store.state.isAuthenticated">
                            <a class="nav-link text-dark" @click="logout()" style="cursor: pointer">Logout</a>
                        </li>                        
                        <b-nav-item class="text-dark" to="/">Home</b-nav-item>
                        <b-nav-item class="text-dark" to="/movies">Movies</b-nav-item>
                    </ul>
                </b-collapse>
            </b-container>
        </b-navbar>
    </header>    
</template>

<script>
    import { login, logout, isLoggedIn } from '../auth';

    export default {
        created() {
            let store = this.$store;
            isLoggedIn().then(value => {
                if (value) {
                    store.dispatch('login');
                } else {
                    store.dispatch('logout');
                }
            })
        },
        data() {
            return {}
        },
        methods: {
            login,            
            logout
        }        
    }
</script>

<style>
    a.navbar-brand {
        white-space: normal;
        text-align: center;
        word-break: break-all;
    }

    html {
        font-size: 14px;
    }

    @media (min-width: 768px) {
        html {
            font-size: 16px;
        }
    }

    .box-shadow {
        box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
    }
</style>