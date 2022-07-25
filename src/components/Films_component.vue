<template>
  <div class="container-fluid">
    <table class="table table-striped table-dark mb-5 col-lg-12 col-md-6 col-sm-3">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Date</th>
          <th scope="col">Titre</th>
          <th scope="col">Auteur</th>
          <th scope="col">Temps</th>
          <th scope="col">Details Film</th>
        </tr>
      </thead>

      <tbody>
        <tr class="tr-style" v-bind:key="index" v-for="(film, index) in films">
          <td><img class="rounded " :src="getImgUrl(film)" v-bind:alt="film" style="width: 130px;" /></td>
          <td class="font-perso">{{ film.date }}</td>
          <td class="font-perso">{{ film.title }}</td>
          <td class="font-perso">{{ film.acteurs }}</td>
          <td class="font-perso">{{ film.temps }}</td>
          <td>
            <button class="btn mt-2" 
            :date="film.date" 
            :title="film.title"
            :acteurs="film.acteurs" 
            :temps="film.temps"
            :image="film.image"
            :description="film.description"
           
            @click.prevent="sessionStorageFilm(film)">Detail</button>
          </td>
        </tr>
      </tbody>
    </table>



  </div>
</template>



<script>
export default {
  name: "Films_component",
 
  data () {
    return {

      films: [
        { image: 'film1', date: '05/08/2022', title: 'Fight Club', acteurs: 'Brad Pitt, Edward Norton', temps: '2h 19min', description: "Lorem Ipsum is industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown prin"},
        { image: 'film2', date: '06/08/2022', title: 'Shutter Island', acteurs: 'Leonardo DiCaprio, Mark Ruffalo', temps: '2h 18min', description: "Lorem Ipsum is industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown prin"},
        { image: 'film3', date: '07/08/2022', title: 'Time Out', acteurs: 'Justin Timberlake, Amanda Seyfried', temps: '1h 49min', description: "Lorem Ipsum is industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown prin"}
      ],
    }
  },
  methods: {
    // Placement de mon objet en sessionStorage + redirection vers Detail_film_component
    sessionStorageFilm: function(film){
      sessionStorage.setItem("film", JSON.stringify(film));
      this.$router.push('/detail_film');
    },

    getImgUrl: function(film) {
      var images = require.context('../../img/', false, /\.jpg$/);
      return images('./' + film.image + ".jpg")
    }
  }
};
</script>

<style scoped>
.font-perso {
  font-size: 1.2rem;
}

button {
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 2.2em;
  letter-spacing: 2.2px;
  fill: #ffffff;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: #ffffff;
  border-radius: 50px 50px 50px 50px;
  padding: 8px;
  width: 6rem;
}
.tr-style {
  color: white;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  cursor: pointer;
  font-size: 1.05em;
  width: 50rem;
}
.tr-style:hover button {
  background: #3d747d;
  color: white;
}
.tr-style:hover{
  transform: scale(1.02);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
  background-color: rgba(247, 247, 247, 0.9) !important;
  font-weight: bold;
  font-size: 1em;
  color: black;
}
@media(max-width: 990px){
.tr-style{
  margin: 20px;
}
}
</style>