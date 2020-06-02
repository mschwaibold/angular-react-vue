///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   28.05.2020             //
//                                   //
///////////////////////////////////////

<template>
    <div>
        <p v-if="movie == null"><em>Loading...</em></p>
        <b-form v-else @submit.prevent="save(movie)">
            <b-form-group label="Title:" label-for="title">
                <b-form-input type="text" id="title" v-model="movie.title"></b-form-input>
            </b-form-group>
            <b-form-group label="Image URL:" label-for="imageUrl">
                <b-form-input type="text" id="imageUrl" v-model="movie.imageUrl"></b-form-input>
            </b-form-group>
            <b-form-group label="Review:" label-for="review">
                <b-form-textarea id="title" v-model="movie.review"></b-form-textarea>
            </b-form-group>
            <b-form-group label="Rating:" label-for="rating">
                <b-form-input type="text" id="rating" v-model="movie.rating"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
    </div>
</template>

<script>
    /* eslint no-console: ["error", { allow: ["log"] }] */
    import axios from 'axios';

    export default {
        created() {
            let id = this.$route.params.id;
            if (id > 0) {
                axios.get('https://localhost:44300/movies/' + id)
                    .then(response => {
                        this.movie = response.data;
                    }, error => {
                        console.log(error);
                    });
            } else {
                this.movie = {
                    title: undefined,
                    imageUrl: undefined,
                    review: undefined,
                    rating: undefined,
                }
            }
        },
        data() {
            return {
                movie: null
            }
        },
        methods: {
            save(movie) {
                var router = this.$router;
                if (movie.id > 0) {
                    axios.put('https://localhost:44300/movies', movie).then(function () { router.push('/movies'); });
                } else {
                    axios.post('https://localhost:44300/movies', movie).then(function () { router.push('/movies'); });
                }
            }
        }
    }
</script>