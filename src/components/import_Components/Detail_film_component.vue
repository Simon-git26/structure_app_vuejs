<template>
    <transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-dialog-scrollable mx-auto" role="document">
                <div class="modal-content shadow-lg">

                  <!-- Modal Header -->
                  <div class="modal-header">
                      <h5 class="d-flex justify-content-center">{{ film.title }}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" v-on:click="$emit('modal')">&times;</span>
                      </button>
                  </div>

                  <!-- Modal Body -->
                  <div class="modal-body">
                      <div class="mt-3">
                          <div class="row g-0">
                         
                              <div class="card-body">
                                  <img class="rounded " :src="getImg(film)" v-bind:alt="film" style="width: 130px;" />
                                  <p class="card-text col-md-12 text-center">{{ film.date }}</p>
                                  <p class="card-text col-md-12 text-center">{{ film.acteurs }}</p>
                                  <p class="card-text col-md-12 text-center">{{ film.temps }}</p>
                              </div>
                          </div>  
                      </div>
                  </div>

                  <!-- Modal Footer -->
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary"  v-on:click="$emit('modal')">Fermer</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>



<script>
    export default {
        name: "Detail_film_component",

        data() {
            return {
                film: []
            }
        },

        methods: {
            getImg(film) {
                var images = require.context('../../../img/', false, /\.jpg$/);
                return images('./' + film.image + ".jpg")
            }
        },

        // Recuperation de mon objet en localStorage
        mounted() {
            this.film = JSON.parse(localStorage.getItem('film'))
        }
       
    }
</script>



<style scoped>

.modal-body {
    max-height: 800px;
}

.modal-dialog-scrollable {
    width: 700px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>