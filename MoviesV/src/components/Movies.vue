///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   27.05.2020             //
//                                   //
///////////////////////////////////////

<template>
    <div>
        <h1 id="tabelLabel">Movies seen in 2020</h1>
        <p>This component demonstrates fetching data from the server.</p>
        <p v-show="loading"><em>Loading...</em></p>
        <table v-show="!loading" class="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Poster</th>
                    <th>Review</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="movie in movies" :key="movie.id">
                    <td><img :src="movie.imageUrl" :alt="movie.title" /></td>
                    <td>
                        <h2>{{movie.title}}</h2>
                        <div>
                            {{movie.review}}
                        </div>
                        <div>
                            Added: {{movie.created}}
                        </div>
                        <div>
                            Updated: {{movie.updated}}
                        </div>
                        <div v-show="$store.state.isAuthenticated">
                            <button class="btn btn-outline-dark" @click="editMovieDetails(movie)">Edit</button>
                            <button class="btn btn-outline-dark" @click="deleteMovie(movie)">Delete</button>
                        </div>
                    </td>
                    <td><span>{{movie.rating}}/10</span></td>
                </tr>                
            </tbody>
        </table>
        <b-button variant="primary" @click="addNewMovie()">Add a movie</b-button>
    </div>
</template>

<script>
    /* eslint no-console: ["error", { allow: ["log"] }] */
    import axios from 'axios';

    function updateList(data) {
        axios.get('https://localhost:44300/movies')
            .then(response => {
               data.movies = response.data;
               data.loading = false;
            }, error => {
                console.log(error);
            });
    }

    export default {
        created() {
            //updateList(this);
            //axios.get('https://localhost:44300/movies')
            //    .then(response => {
            //        this.movies = response.data;
            //        this.loading = false;
            //    }, error => {
            //        console.log(error);
            //    });
        },
        data() {
            return {
                loading: true,
                movies: []
            };
        },
        mounted() {
            updateList(this);
        },
        methods: {
            addNewMovie() {
                this.$router.push('/movie-details/0');
            },
            editMovieDetails(movie) {
                this.$router.push('/movie-details/' + movie.id);
            },
            deleteMovie(movie) {
                axios.delete('https://localhost:44300/movies/' + movie.id).then(() => updateList(this));
            }
        }
    }
</script>
