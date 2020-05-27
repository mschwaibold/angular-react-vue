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
        <p v-if="loading"><em>Loading...</em></p>
        <table v-else class="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Poster</th>
                    <th>Review</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="movie in movies" :key="movie.id">
                    <td><img src="movie.imageUrl" alt="movie.title" /></td>
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
                        <div>
                            <a class="btn btn-outline-dark" href="'movie-details/' + movie.id">Edit</a>
                        </div>
                    </td>
                    <td><span>{{movie.rating}}/10</span></td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                movies: [{ title: "Star Wars IX" }, { title: "Knives Out" }]
            };
        }
    }
</script>
