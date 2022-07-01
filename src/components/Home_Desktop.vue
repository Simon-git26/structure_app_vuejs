<template>
  <div>
    <!-- Caroussel -->
    <div id="myCarousel" class="carousel slide border" data-ride="carousel">
      <div class="carousel-inner">
        <!-- Premier Slide -->
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://www.pierre-giraud.com/bootstrap-carrousel-slide-1.jpg"  alt="Premier Slide" />

          <!-- Bouton Selection Film -->
          <div class="carousel-caption d-none d-sm-block">
            <button type="button" class="btn btn-primary">Selections Films</button>
          </div>
        </div>


        <!-- Deuxieme Slide -->
        <div class="carousel-item">
          <img class="d-block w-100" src="https://www.pierre-giraud.com/bootstrap-carrousel-slide-1.jpg" alt="Deuxieme Slide" />

          <div class="carousel-caption d-none d-sm-block">
            <button type="button" class="btn btn-primary">Selections Films</button>
          </div>
        </div>


          <!-- Troisième Slide -->
        <div class="carousel-item">
          <img class="d-block w-100" src="https://www.pierre-giraud.com/bootstrap-carrousel-slide-1.jpg" alt="Troisieme Slide" />

          <div class="carousel-caption d-none d-sm-block">
            <button type="button" class="btn btn-primary">Selections Films</button>
          </div>
        </div>
        
      </div>

      <!-- Caroussel Flèche next et prev -->
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- A Propos de Nous -->
    <div class="pt-2 pb-5 mt-5 mb-5" style="background-color: rgba(0, 0, 0, 0.8)">
      <h3 class="pb-2 text-center text-white">A Propos de nous</h3>

      <div class="row text-center" style="margin: auto; width: 80%">
        <!-- Card 1 -->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0 justify-content-center d-flex">
          <div class="card" style="width: 24rem">
            <img class="card-img-top" src="https://www.pierre-giraud.com/bootstrap-carrousel-slide-1.jpg" alt="Card image cap" />

            <!-- Card Body -->
            <div class="card-body">
              <h5 class="card-title">Titre</h5>
              <p class="card-text">Petit exemple, mettre une description de l'image</p>
              <a href="#" class="btn btn-primary">Bouton</a>
            </div>
          </div>
        </div>


        <!-- Card 2 -->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0 justify-content-center d-flex">
          <div class="card" style="width: 24rem">
            <img class="card-img-top" style="height: 14rem;" src="../../img/vintage-wheel-retro-film-vehicle-reel-1067196-pxhere.com.jpg" alt="Card image cap" />
            
            <!-- Card Body -->
            <div class="card-body">
              <h5 class="card-title">Titre</h5>
              <p class="card-text">Petit exemple, mettre une description de l'image</p>
              <a href="#" class="btn btn-primary">Bouton</a>
            </div>
          </div>
        </div>


        <!-- Card 3 -->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0 justify-content-center d-flex" >
          <div class="card" style="width: 24rem">
            <img class="card-img-top" src="https://www.pierre-giraud.com/bootstrap-carrousel-slide-1.jpg" alt="Card image cap"/>

            <!-- Card Body -->
            <div class="card-body">
              <h5 class="card-title">Titre</h5>
              <p class="card-text">Petit exemple, mettre une description de l'image</p>
              <a href="#" class="btn btn-primary">Bouton</a>
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
