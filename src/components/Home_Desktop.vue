<template>
  <div>
    <!-- Caroussel -->
    <div id="myCarousel" class="carousel slide border" data-ride="carousel">
      <div class="carousel-inner">
        <!-- Premier Slide -->
        <div class="carousel-item active">
          <img class="d-block w-100 cover" src="../../img/1.jpg"  alt="Premier Slide" />

          <!-- Bouton Selection Film -->
          <div class="carousel-caption d-none d-sm-block">
            <div class="text-caroussel">
              <h2 class="pb-1">Bienvenu au</h2>
              <h1 class="pb-4">Festival du Films de Plein Air</h1>

              <a href="/films" type="button" class="btn style-button">Liste Films<i aria-hidden="true" class="fas fa-arrow-right ml-2"></i></a>
            </div>
          </div>
        </div>


        <!-- Deuxieme Slide -->
        <div class="carousel-item">
          <img class="d-block w-100 cover" src="../../img/4.jpg" alt="Deuxieme Slide" />

          <div class="carousel-caption d-none d-sm-block">
            <div class="text-caroussel">
              <h2 class="pb-1">Bienvenu au</h2>
              <h1 class="pb-4">Festival du Films de Plein Air</h1>

              <a href="/films" type="button" class="btn style-button">Liste Films</a>
            </div>
          </div>
        </div>


          <!-- Troisième Slide -->
        <div class="carousel-item">
          <img class="d-block w-100 cover" src="../../img/3.jpg" alt="Troisieme Slide" />

          <div class="carousel-caption d-none d-sm-block">
            <div class="text-caroussel">
              <h2 class="pb-1">Bienvenu au</h2>
              <h1 class="pb-4">Festival du Films de Plein Air</h1>

              <a href="/films" type="button" class="btn style-button">Liste Films</a>
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
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Qui sommes-nous ?</h5>
              <p class="card-text">Nous sommes l'association "Les Films de Plein Air", nait recemment, nous ambitionnons de projeter des films d'auteur en plein air au parc Monceau à Paris.</p>
              <div>
                <a href="./films" class="btn style-btn-card">Liste Film</a>
              </div>
             
            </div>
          </div>
        </div>


        <!-- Card 2 -->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0 justify-content-center d-flex">
          <div class="card" style="width: 24rem">
            <img class="card-img-top" style="height: 14rem;" src="../../img/vintage-wheel-retro-film-vehicle-reel-1067196-pxhere.com.jpg" alt="Card image cap" />
           
            <!-- Card Body -->
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Actualitée</h5>
              <p class="card-text">Sur notre partie blog, vous pouvez suivre les dernières actualitées de notre assosiation</p>
              <div>
                <a href="./Actualite" class="btn style-btn-card">Je m'informe !</a>
              </div>
             
            </div>
          </div>
        </div>


        <!-- Card 3 -->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0 justify-content-center d-flex" >
          <div class="card" style="width: 24rem">
            <img class="card-img-top" style="height: 14rem;" src="../../img/landscape-outdoor-people-adventure-tourism-sports-363431-pxhere.com.jpg" alt="Card image cap"/>

            <!-- Card Body -->
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Objectifs</h5>
              <p class="card-text">Nos objectifs sont simple, avoir un public variées, de tout age et proposer des sorties en famille ou amis originales</p>
              <div>
                <a href="./Contact" class="btn style-btn-card">Prenez contact !</a>
              </div>
             
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
.carousel-item {
  height: inherit;
}

.text-caroussel {
  color: rgba(255, 255, 255, 0.7);
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 15px;
}

.style-btn-card {
    font-size: 11px;
    font-weight: bold;
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
    padding: 14px 20px 14px 20px;
    width: 12rem;
}
.style-btn-card:hover {
  background-color: #3d747d;
}
.style-button:hover {
  color: white;
  background-color: #3d747d;
}

.style-button {
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 2.2em;
    letter-spacing: 2.2px;
    fill: #ffffff;
    color: #ffffff;
    background-color: rgba(0,0,0,0);
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: #ffffff;
    border-radius: 50px 50px 50px 50px;
    padding: 14px 20px 14px 20px;
    width: 11rem;
}
</style>