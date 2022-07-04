<template>
  <div>
    <!-- Caroussel -->
    <div id="myCarousel" class="carousel slide border" data-ride="carousel">
      <div class="carousel-inner">
        <!-- Premier Slide -->
        <div class="carousel-item active">
          <img class="d-block w-100 size" src="../../img/1.jpg"  alt="Premier Slide" />

          <!-- Bouton Selection Film -->
          <div class="carousel-caption d-none d-sm-block pos-relative">
            <div class="text-caroussel pos-absolute">
              <h2 class="pb-1">Bienvenu au</h2>
              <h1 class="pb-4">Festival du Films de Plein Air</h1>

              <a href="/films" type="button" class="btn btn-perso">Liste Films</a>
            </div>
          </div>
        </div>


        <!-- Deuxieme Slide -->
        <div class="carousel-item">
          <img class="d-block w-100 size" src="../../img/4.jpg" alt="Deuxieme Slide" />

          <div class="carousel-caption d-none d-sm-block pos-relative">
            <div class="text-caroussel pos-absolute">
              <h2 class="pb-1">Bienvenu au</h2>
              <h1 class="pb-4">Festival du Films de Plein Air</h1>

              <a href="/films" type="button" class="btn btn-perso">Liste Films</a>
            </div>
          </div>
        </div>


          <!-- Troisième Slide -->
        <div class="carousel-item">
          <img class="d-block w-100 size" src="../../img/3.jpg" alt="Troisieme Slide" />

          <div class="carousel-caption d-none d-sm-block pos-relative">
            <div class="text-caroussel pos-absolute">
              <h2 class="pb-1">Bienvenu au</h2>
              <h1 class="pb-4">Festival du Films de Plein Air</h1>

              <a href="/films" type="button" class="btn btn-perso">Liste Films</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <!-- A Propos de Nous -->
    <div class="pt-2 pb-5 mt-5 mb-5" style="background-color: rgba(0, 0, 0, 0.8)">
      <h3 class="pb-2 text-center text-white">A Propos de nous</h3>

      <div class="row text-center" style="margin: auto; width: 80%">
        <!-- Card 1 -->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0 justify-content-center d-flex">
          <div class="card" style="width: 24rem">
            <img class="card-img-top" style="height: 14rem;" src="../../img/creative-light-technology-white-camera-photography-797696-pxhere.com.jpg" alt="Card image cap" />

            <!-- Card Body -->
            <div class="card-body">
              <h5 class="card-title">Qui sommes-nous ?</h5>
              <p class="card-text">Nous sommes l'association "Les Films de Plein Air", nait recemment, nous ambitionnons de projeter des films d'auteur en plein air au parc Monceau à Paris.</p>
              <a href="./films" class="btn btn-perso-propos">Liste Film</a>
            </div>
          </div>
        </div>


        <!-- Card 2 -->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0 justify-content-center d-flex">
          <div class="card" style="width: 24rem">
            <img class="card-img-top" style="height: 14rem;" src="../../img/vintage-wheel-retro-film-vehicle-reel-1067196-pxhere.com.jpg" alt="Card image cap" />
            
            <!-- Card Body -->
            <div class="card-body">
              <h5 class="card-title">Actualitée</h5>
              <p class="card-text">Sur notre partie blog, vous pouvez suivre les dernières actualitées de notre assosiation</p>
              <a href="./Actualite" class="btn btn-perso-propos">Je m'informe !</a>
            </div>
          </div>
        </div>


        <!-- Card 3 -->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0 justify-content-center d-flex" >
          <div class="card" style="width: 24rem">
            <img class="card-img-top" style="height: 14rem;" src="../../img/landscape-outdoor-people-adventure-tourism-sports-363431-pxhere.com.jpg" alt="Card image cap"/>

            <!-- Card Body -->
            <div class="card-body">
              <h5 class="card-title">Objectifs</h5>
              <p class="card-text">Nos objectifs sont simple, avoir un public variées, de tout age et proposer des sorties en famille ou amis originales</p>
              <a href="./Contact" class="btn btn-perso-propos">Prenez contact !</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home_Desktop",

};
</script>

<style scoped>
.size {
  height: 620px; 
}

.pos-relative {
  position: relative;
}

.pos-absolute {
  position: absolute;
  left: -286px;
  bottom: 21px;
  margin-bottom: 0;
  padding-bottom: 0;
}

.text-caroussel {
  color: rgba(255, 255, 255, 0.9);
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: rgba(0, 0, 0, 0.5);
}

.btn-perso {
  font-size: 1.1em;
  color: black;
  background-color: rgba(255, 255, 255, 0.9);
  width: 10rem;
}

.btn-perso-propos {
  font-size: 1.1em;
  color: black;
  background-color: rgba(0, 0, 0, 0.4);
  width: 10rem;
}

.btn-perso-propos:hover {
  color: white;
  background-color: #3d747d;
}

.btn-perso:hover {
  color: white;
  background-color: #3d747d;
}
</style>
