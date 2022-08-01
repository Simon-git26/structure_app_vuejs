<template>
    <transition name="modal" v-if="showModal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-dialog-scrollable mx-auto" role="document">
                <div class="modal-content shadow-lg">

                  <!-- Modal Header -->
                  <div class="modal-header">
                      <h3>Formulaire de pré-inscription</h3>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" v-on:click="$emit('modal')">&times;</span>
                      </button>
                  </div>

                  <!-- Modal Body -->
                  <div class="modal-body">
                      <div class="mt-3 mb-5">
                          <div class="row g-0">
                            <!-- Body Contenu -->
                              <div class="card-body">

                                <!-- Formulaire -->
                                <form action="">
                                    <div class="form-group col-md-8 mx-auto">
                                        <label for="inputName">Nom et Prenom</label>
                                        <input type="text" class="form-control" id="inputName" placeholder="Nom et Prenom" />
                                    </div>
                                   
                                    <div class="form-group col-md-8 mx-auto">
                                        <label for="inputEmail">Email</label>
                                        <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                                    </div>

                                    <div class="form-group col-md-8 mx-auto">
                                        <label for="inputNumber">Nombre de personnes</label>
                                        <input type="number" class="form-control" id="inputNumber"/>
                                    </div>
                                       
                                    <!-- Redirection sur la page de selection de film -->
                                    <button v-on:click="incrementClick()" type="button" class="btn btn-style">Confirmer !</button>
                               
                                    <div id="counter-label" class="compteur">{{ counter }}</div>
                               
                                </form>
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
        name: "Modal_inscription_component",

        data() {
            return {
                showModal: true,
                counter: 12,
            }
        },

        methods: {
            incrementClick() {
                this.counter += 1;
                document.getElementById("counter-label").innerHTML = this.counter;
            },
        },
    }
</script>



<style scoped>

label {
    color:rgba(0, 0, 0, 0.8);
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 2px;
}

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

.btn-style {
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

.btn-style:hover {
  background: #3d747d;
  color: white;
}

.compteur {
    margin: auto;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 2.2em;
    letter-spacing: 2px;
    fill: #ffffff;
    color: rgba(0, 0, 0, 0.8);
    background-color: rgba(18, 183, 73, 0.6);
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: #000000;
    border-radius: 50px 50px 50px 50px;
    padding: 8px;
    width: 11rem;
}
</style>