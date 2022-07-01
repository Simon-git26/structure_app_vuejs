<template>
  <div>
    <div class="row">
      <!-- Tableau -->
      <div class="table-responsive mb-5 mt-5 pr-4 pl-4">

        <ul class="list-group list-group-vertical align-items-center">
            <li class="mb-3 ml-2 mr-2 list-group-item justify-content-around align-items-baseline d-flex col-lg-12 col-md-6 col-sm-3" v-bind:key="index" v-for="(film, index) in films">
            <p>{{ film.date }}</p>
            <p>{{ film.title }}</p>
            <p>{{ film.acteurs }}</p>
            <p>{{ film.temps }}</p>
           
            <!---- Placement des bonnes infos de film + appel fonction pour placer l'objet film dans le localStorage ---->
            <button class="btn mt-2" 
            :date="film.date" 
            :title="film.title"
            :acteurs="film.acteurs" 
            :temps="film.temps"
            @click.prevent="localStorageFilm(film), showModal = true">Detail</button>
            </li>
        </ul>

      </div>
    </div>
   

    <!-- Faire passer au composant enfant mon tableau d'objet -->
    <div v-if="showModal">
        <Detail_film_component v-on:modal="showModal = false" />
    </div>
  </div>
</template>

<script>
import Detail_film_component from "../components/import_Components/Detail_film_component";

export default {
  name: "Films_component",

  components: {
    Detail_film_component
  },

  data () {
    return {
      showModal : false,

      films: [
        {date: '05/08/2022', title: 'Fight Club', acteurs: 'Brad Pitt, Edward Norton', temps: '2h 19min'},
        {date: '06/08/2022', title: 'Shutter Island', acteurs: 'Leonardo DiCaprio, Mark Ruffalo', temps: '2h 18min'},
        {date: '07/08/2022', title: 'Time Out', acteurs: 'Justin Timberlake, Amanda Seyfried', temps: '1h 49min'}
      ],
    }
  },

  methods: {
    // Placement de mon objet en localStorage
    localStorageFilm: function(film){
      localStorage.setItem("film", JSON.stringify(film));
    }
  }
};
</script>

<style scoped>

button {
  line-height: 25px;
  border: none;
  cursor: pointer;
  background: white;
  width: 6em;
}

li {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  cursor: pointer;
  font-size: 1.05em;
  border-radius: 15px 15px 15px 15px !important;
  width: 50rem;
}

li:hover button {
  background: #3d747d;
  color: white;

}

li:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
  background: rgba(247, 247, 247, 0.9);
  font-weight: bold;
  font-size: 1em;
  color: black;
}

@media(max-width: 990px){
li{
  margin: 20px;
}
}
</style>