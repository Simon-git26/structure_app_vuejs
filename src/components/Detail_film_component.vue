<template>
    <div>
        <section>
            <div class="container mt-5 mb-5">
                <div class="card">
                    <div class="row">
                        <!-- Infos Film  -->
                        <div class="col-md-6 mt-4">
                            <div class="card-block">
                                <h5 class="d-flex justify-content-center">Titre: {{ film.title }}</h5>
                                <p class="card-text col-md-12 text-center">Date de difusion: {{ film.date }}</p>
                                <p class="card-text col-md-12 text-center">Acteurs Principaux: {{ film.acteurs }}</p>
                                <p class="card-text col-md-12 text-center">Durée: {{ film.temps }}</p>

                                <!-- Trouver un moyen pour la description qui s'adapte sur chaque film -->

                                <button @click.prevent="showModal = true">Se Pré-inscrire</button>
                            </div>
                        </div>

                        <!-- Image Card -->
                        <div class="col-md-6">
                            <img class="rounded w-100" :src="getImg(film)" v-bind:alt="film" />
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <div v-if="showModal">
            <Modal_inscription_component v-on:modal="showModal = false" />
        </div>
    </div>
</template>



<script>
import Modal_inscription_component from "../components/import_Components/Modal_inscription_component";

    export default {
        name: "Detail_film_component",

        components: {
            Modal_inscription_component
        },

        data() {
            return {
                showModal : false,
                film: []
            }
        },
        methods: {
            getImg(film) {
                var images = require.context('../../img/', false, /\.jpg$/);
                return images('./' + film.image + ".jpg")
            }
        },
        // Recuperation de mon objet en sessionStorage
        mounted() {
            this.film = JSON.parse(sessionStorage.getItem('film'));
        }
       
    }
</script>

<style scoped>

img {
  height: 20rem;
  background:center no-repeat;
  background-size: cover;
}

button {
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 2.2em;
  letter-spacing: 2px;
  fill: #ffffff;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: #ffffff;
  border-radius: 50px 50px 50px 50px;
  padding: 9px;
  width: 10rem;
}

button:hover {
  background: #3d747d;
}
</style>