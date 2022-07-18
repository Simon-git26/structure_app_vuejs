<template>
  <div class="container-fluid">
    <div class="card px-3 pt-3 pb-1 mb-5 mt-2 mx-auto" style="max-width: 32rem">
     
      <div>
        <!-- Image -->
        <div class="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light">
          <img src="../../img/1.jpg" class="img-fluid" style="width: 100%;" />
         
        </div>

        <!-- Article title and description -->
        <a href="./" class="text-dark text-decoration-none">
         
          <h5 class="pb-3"><i class="fa-solid fa-film mr-2"></i>Les Films de Plein Air<i class="fa-solid fa-film ml-2"></i></h5>
         
          <p>
            Madame Jenifer Edwards est l'organisatrice du festival des Films de Plein Air, elle ambitionne de sélectionner et de projeter des films
             d'auteur en plein air du 5 au 8 août au parc Monceau à Paris.
          </p>
        </a>

        <hr />

        <!-- Premiere card -->
        <div class="row mb-4 border-bottom pb-2">
          <div class="col-3" style="margin: auto;">
            <img src="../../img/1.jpg" class="img-fluid shadow-1-strong rounded" alt="premier film" />
          </div>

          <div class="col-9 text-dark">
            <p class="mb-2"><strong>Figth Club</strong></p>
            <p>
              <u class="text-decoration-none">Fight Club sera le premier film diffusé, un classique connus de tous</u>
            </p>

            <a href="./films" class="btn btn-sm btn-perso">En Voir plus</a>
          </div>
        </div>
       
        <!-- Deuxieme card -->
        <div class="row mb-4 border-bottom pb-2">
          <div class="col-3" style="margin: auto;">
            <img src="../../img/2.jpg" class="img-fluid shadow-1-strong rounded" alt="deuxieme film" />
          </div>

          <div class="col-9 text-dark">
            <p class="mb-2"><strong>Shutter Island</strong></p>
            <p>
              <u class="text-decoration-none">Shutter Island est un film passionant qui plait au grand publique</u>
            </p>

            <a href="./films" class="btn btn-sm btn-perso">En Voir plus</a>
          </div>
        </div>
       
        <!-- Dernière card -->
        <div class="row mb-4 border-bottom pb-2">
          <div class="col-3" style="margin: auto;">
            <img src="../../img/3.jpg" class="img-fluid shadow-1-strong rounded" alt="Dernier film" />
          </div>

          <div class="col-9 text-dark">
            <p class="mb-2"><strong>Time Out</strong></p>
            <p>
              <u class="text-decoration-none">Time out est un film d'action qui plairas au plus jeune</u>
            </p>

            <a href="./films" class="btn btn-sm btn-perso">En Voir plus</a>
          </div>
        </div>

       
      </div>
      <!-- News block -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Actualite_component",
};
</script>


<style scoped>
.btn-perso {
  font-size: 10px;
 
  text-transform: uppercase;
  line-height: 2.2em;
  letter-spacing: 2.2px;
  fill: #ffffff;
  color: #ffffff;
  background-color: rgba(0,0,0,0.8);
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: #ffffff;
  border-radius: 50px 50px 50px 50px;
  padding: 12px 17px 12px 17px;
  width: 10rem;
}
.btn-perso:hover {
  background-color: #3d747d;
}
</style>